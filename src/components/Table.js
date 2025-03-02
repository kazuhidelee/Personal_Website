import "./Table.css";
import React from 'react';
import Row from "./Row";
import Header from "./Header";

function Table() {
  return (
    <div className="table_container">
      <div className="table">
          <Header />
          <Row projectName={"Personal Website"} category={"Web Development"} description={"The porfolio website you are currently viewing!"} date={"2025"} link={"link"}/>
          <Row projectName={"Bubble! - Learn Science"} category={"Web Development"} description={"A web application that aids students with lower resource backgrounds to comprehending scientific research papers through interactive learning experiences"} date={"2023"} link={"link"}/>
          <Row projectName={"Arbor Advisor"} category={"Web Development"} description={"An user-centric website aimed to condense resources for international, out of state, and first generation students in the Washtenaw County area focused on accommodating to various necessities such as groceries and transportation"} date={"2023"} link={"link"}/>
          <Row projectName={"AI Chatbot"} category={"Web Development"} description={"An AI chatbot website that uses the OpenAI API key"} date={"2024"} link={"link"}/>
          <Row projectName={"Windrose API"} category={"Web Development"} description={"A public API that fetches historical windose data from Southeast Michigan region; Used in the air quality map research project"} date={"2024"} link={"link"}/>
          <Row projectName={"Concordia"} category={"Mobile Development"} description={"A mobile application for 200+ global volunteers to streamline support efforts, impacting 2.8 million people in the Dominican Republic"} date={"2024"} link={"link"}/>
          <Row projectName={"Search Engine"} category={"Distributed System"} description={"A scalable search engine similar to Google and Bing using MapReduce for parallel data processing, incorporating tf-idf and PageRank algorithms to optimize information retrieval and link analysis"} date={"2024"} link={"link"}/>
          <Row projectName={"Mapreduce paradigm"} category={"Distributed System"} description={"A single machine, multi-process, multi-threaded server that executes user-submitted MapReduce Jobs"} date={"2024"} link={"link"}/>
          <Row projectName={"Thread Library"} category={"Operating System"} description={"Implementation of a kernel level thread library similar to the STL library in C++; includes cpu, threads, mutex, and cv classes"} date={"2025"} link={"link"}/>
          <Row projectName={"BW Colorization"} category={"Computer Vision"} description={"An TensorFlow image colorization model inspired by the paper Colorful image Colorization by Zhang et al. "} date={"2024"} link={"link"}/>
          <Row projectName={"Mission Valentine"} category={"Game Development"} description={"A Valentine themed mini game that inlcudes dodging game machanisms and a lot of cute pixel arts drew by me :-)"} date={"2025"} link={"link"}/>
          <Row projectName={"Monte Carlo Tree Search AI"} category={"Artificial Intelligent"} description={"Implemation of the Monte Carlo Tree Search Algorithm part of the AlphaZero in the context of the game 'Othello'"} date={"2024"} link={"link"}/>
          <Row projectName={"Image Classifier"} category={"Artificial Intelligent"} description={"A PyTorch convolutaional neural network that is aimed to classify images"} date={"2024"} link={"link"}/>
          <Row projectName={"Min-Max Game Agent"} category={"Artificial Intelligent"} description={"A Tic-Tac-Toe and Connect-4 AI agent using the minimax with alpha-beta pruning algorithm"} date={"2024"} link={"link"}/>
          <Row projectName={"Maze Search Algorithms"} category={"Artificial Intelligent"} description={"An AI agent that searches a path in a maze using BFS, DFS, UCS, A-start search algorithms"} date={"2024"} link={"link"}/>
      </div>
    </div>
  );
}

export default Table;
