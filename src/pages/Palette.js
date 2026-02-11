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

	// Load drawings from localStorage on mount
	useEffect(() => {
		const savedDrawings = localStorage.getItem('paletteDrawings');
		if (savedDrawings) {
			setDrawings(JSON.parse(savedDrawings));
		}
	}, []);

	// Save drawings to localStorage whenever drawings change
	useEffect(() => {
		localStorage.setItem('paletteDrawings', JSON.stringify(drawings));
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

	const saveDrawing = () => {
		const canvas = canvasRef.current;
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
				{drawings.map((drawing) => (
					<Polaroid
						key={drawing.id}
						src={drawing.src}
						alt={drawing.alt}
						title={drawing.title}
						text={drawing.text}
					/>
				))}
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
							<button className="canvas-btn" onClick={clearCanvas}>Clear</button>
							<button className="canvas-btn save-btn" onClick={saveDrawing}>Save</button>
						</div>
						<div className="title-input-container">
							<input
								type="text"
								placeholder="Drawing title (optional)"
								value={drawingTitle}
								onChange={(e) => setDrawingTitle(e.target.value)}
								className="drawing-title-input"
							/>
						</div>
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
