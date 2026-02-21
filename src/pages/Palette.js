import "./Palette.css";
import React, { useRef, useState, useEffect } from 'react';
import Card from "../components/Card";
import Polaroid from "../components/Polaroid";

function Palette() {
	const canvasRef = useRef(null);
	const [isDrawing, setIsDrawing] = useState(false);
	const [color, setColor] = useState("#000000");
	const [brushSize, setBrushSize] = useState(5);
	const [drawings, setDrawings] = useState([]);
	const [showDrawingCanvas, setShowDrawingCanvas] = useState(false);
	const [drawingTitle, setDrawingTitle] = useState("");
	const [isUploading, setIsUploading] = useState(false);
	const [uploadError, setUploadError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	// API endpoint - update this to your backend URL
	const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

	// Load drawings from S3 on mount
	useEffect(() => {
		const loadDrawings = async () => {
			setIsLoading(true);
			try {
				// Fetch drawings from S3
				const response = await fetch(`${API_URL}/api/images`);
				if (response.ok) {
					const data = await response.json();
					console.log('Loaded images from S3:', data.images);

					// Convert S3 images to drawing format
					const s3Drawings = data.images.map((img, index) => ({
						id: img.key || `s3-${Date.now()}-${index}`, // Use key as unique identifier
						src: img.url,
						s3Key: img.key,
						title: img.title || 'Untitled',
						text: img.text || 'A drawing from the palette',
						alt: img.alt || 'user drawing'
					}));

					// Remove duplicates based on s3Key (primary identifier)
					const uniqueDrawings = s3Drawings.filter((drawing, index, self) =>
						index === self.findIndex(d => d.s3Key === drawing.s3Key)
					);

					console.log('Unique drawings:', uniqueDrawings);
					setDrawings(uniqueDrawings);
				} else {
					console.error('Failed to fetch images:', response.status);
					setDrawings([]);
				}
			} catch (error) {
				console.error('Error loading drawings:', error);
				setDrawings([]);
			} finally {
				setIsLoading(false);
			}
		};

		loadDrawings();
	}, [API_URL]);

	// Save drawings to localStorage whenever drawings change (for backup only)
	useEffect(() => {
		// Only save S3 drawings to localStorage as backup
		const s3Drawings = drawings.filter(d => d.s3Key);
		if (s3Drawings.length > 0) {
			localStorage.setItem('paletteDrawings', JSON.stringify(s3Drawings));
		}
	}, [drawings]);

	// Initialize canvas
	useEffect(() => {
		if (!showDrawingCanvas) return;
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		// Match polaroid image size (250px width - 30px padding = 220px, maintain aspect ratio)
		canvas.width = 220;
		canvas.height = 220;
		ctx.fillStyle = '#FFFFFF';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}, [showDrawingCanvas]);

	const startDrawing = (e) => {
		setIsDrawing(true);
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		const rect = canvas.getBoundingClientRect();
		const x = (e.clientX || e.touches[0].clientX) - rect.left;
		const y = (e.clientY || e.touches[0].clientY) - rect.top;

		ctx.beginPath();
		ctx.moveTo(x, y);
	};

	const draw = (e) => {
		if (!isDrawing) return;

		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		const rect = canvas.getBoundingClientRect();
		const x = (e.clientX || e.touches[0].clientX) - rect.left;
		const y = (e.clientY || e.touches[0].clientY) - rect.top;

		ctx.lineTo(x, y);
		ctx.strokeStyle = color;
		ctx.lineWidth = brushSize;
		ctx.lineCap = 'round';
		ctx.lineJoin = 'round';
		ctx.stroke();
	};

	const stopDrawing = () => {
		setIsDrawing(false);
	};

	const clearCanvas = () => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		ctx.fillStyle = '#FFFFFF';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	};

	const saveDrawing = async () => {
		const canvas = canvasRef.current;
		setIsUploading(true);
		setUploadError(null);

		try {
			// Convert canvas to blob
			canvas.toBlob(async (blob) => {
				if (!blob) {
					setUploadError('Failed to create image');
					setIsUploading(false);
					return;
				}

				// Create FormData
				const formData = new FormData();
				formData.append('image', blob, 'drawing.png');
				formData.append('title', drawingTitle || 'Untitled');

				// Upload to backend
				const response = await fetch(`${API_URL}/api/upload`, {
					method: 'POST',
					body: formData
				});

				if (!response.ok) {
					const errorData = await response.json();
					throw new Error(errorData.error || 'Upload failed');
				}

				const result = await response.json();
				console.log('Upload result:', result);

				// Create new drawing with S3 URL
				const newDrawing = {
					id: result.key, // Use S3 key as unique ID
					src: result.url,
					s3Key: result.key,
					title: result.title || drawingTitle || "Untitled",
					text: "A drawing from the palette",
					alt: "user drawing"
				};

				// Check if drawing already exists (prevent duplicates)
				const exists = drawings.some(d => d.s3Key === result.key);
				if (!exists) {
					setDrawings([...drawings, newDrawing]);
				}
				clearCanvas();
				setDrawingTitle("");
				setShowDrawingCanvas(false);
				setIsUploading(false);
			}, 'image/png');
		} catch (error) {
			console.error('Upload error:', error);
			setUploadError(error.message || 'Failed to upload image. Using local storage as fallback.');

			// Fallback to localStorage if upload fails
			const dataURL = canvas.toDataURL('image/png');
			const newDrawing = {
				id: Date.now(),
				src: dataURL,
				title: drawingTitle || "Untitled",
				text: "A drawing from the palette",
				alt: "user drawing"
			};

			setDrawings([...drawings, newDrawing]);
			clearCanvas();
			setDrawingTitle("");
			setShowDrawingCanvas(false);
			setIsUploading(false);
		}
	};

	const cancelDrawing = () => {
		clearCanvas();
		setDrawingTitle("");
		setShowDrawingCanvas(false);
	};

	return (
		<div>
			<Card>
				<h2 className="myproject">Palette - Draw & Share!</h2>
				<div className="profile">
					<p>
						Welcome to the Palette!
						<br /><br />
						This is your creative space where you can draw using your mouse or touch screen.
						Express yourself and share your creations!
						<br /><br />
						Click on the + icon below to start drawing. Adjust colors and brush size, then save your masterpiece
						to the gallery.
						<br /><br />
						All your drawings will be saved and displayed below. Have fun creating!
					</p>
				</div>
			</Card>
			<div className="gallery">
				<div className="polaroid add-polaroid" onClick={() => setShowDrawingCanvas(true)}>
					<div className="add-icon">+</div>
				</div>
				{isLoading ? (
					<p className="loading-text">Loading drawings...</p>
				) : drawings.length === 0 ? (
					<p className="no-drawings">No drawings yet. Start creating!</p>
				) : (
					drawings.map((drawing) => (
						<Polaroid
							key={drawing.id || drawing.s3Key}
							src={drawing.src}
							alt={drawing.alt}
							title={drawing.title}
							text={drawing.text}
						/>
					))
				)}
			</div>

			{showDrawingCanvas && (
				<div className="drawing-modal-overlay" onClick={cancelDrawing}>
					<div className="drawing-modal-polaroid" onClick={(e) => e.stopPropagation()}>
						<button className="modal-close-btn" onClick={cancelDrawing}>×</button>
						<div className="drawing-controls">
							<div className="color-picker-circle">
								<input
									type="color"
									id="color-picker"
									value={color}
									onChange={(e) => setColor(e.target.value)}
									className="circular-color-picker"
								/>
							</div>
							<div className="brush-control">
								<label htmlFor="brush-size">Size: {brushSize}px</label>
								<input
									type="range"
									id="brush-size"
									min="1"
									max="50"
									value={brushSize}
									onChange={(e) => setBrushSize(parseInt(e.target.value))}
								/>
							</div>
							<button className="canvas-btn" onClick={clearCanvas} disabled={isUploading}>Clear</button>
							<button className="canvas-btn save-btn" onClick={saveDrawing} disabled={isUploading}>
								{isUploading ? 'Uploading...' : 'Save'}
							</button>
						</div>
						<div className="title-input-container">
							<input
								type="text"
								placeholder="Drawing title (optional)"
								value={drawingTitle}
								onChange={(e) => setDrawingTitle(e.target.value)}
								className="drawing-title-input"
								disabled={isUploading}
							/>
						</div>
						{uploadError && (
							<div className="upload-error">
								{uploadError}
							</div>
						)}
						<div className="drawing-canvas-wrapper">
							<canvas
								ref={canvasRef}
								className="drawing-canvas"
								onMouseDown={startDrawing}
								onMouseMove={draw}
								onMouseUp={stopDrawing}
								onMouseLeave={stopDrawing}
								onTouchStart={startDrawing}
								onTouchMove={draw}
								onTouchEnd={stopDrawing}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Palette;
