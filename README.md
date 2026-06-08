# 🚀 Forget Classic Portfolios: A Living Cyber Dashboard

**Developer:** Ege Sül  
**Position / Field:** Computer Programming Student & Backend / AI-Focused Developer  
**Project Type:** End-of-Term Capstone Project & Live Software Simulation  

---

## 💡 Where Did This Project Come From? (My Purpose & Philosophy)

Aren't we all tired of those monotonous, boilerplate portfolio websites scattered across the internet? Static sites that just say *"Hello, I write code"* along with a couple of basic graphic progress bars fall incredibly short of showing a developer's true potential. 

I am a developer driven by high standards and ambitious goals. My previous experience building an architecture/design website from scratch showed me just how tedious repetitive, "brute-force" coding can be. When starting this project, I set a strict rule for myself: **No limits.** I aimed to push far beyond the academic curriculum and standard resources. I wanted to build a "proper," fully comprehensive software simulation that I could proudly showcase live on my own domain.

This project merges my C# / .NET Core backend knowledge, relational database (MS SQL Server) logic, and asynchronous JavaScript skills. When it came to advanced topics like artificial intelligence integration, I utilized AI as a senior **Pair Programmer**. Guided by my vision, this project—which I continuously refined, breaking and fixing things directly in the browser—is not just an assignment; it is a living, futuristic product.

---

## 🛠️ What's Happening Under the Hood? (Technical Architecture)

When building this website, I avoided bulky external CSS libraries (Tailwind, Bootstrap, etc.) and architectures that lead to spaghetti code. Staying loyal to native web development (**HTML5, CSS3, Vanilla JS**), I optimized everything within a single dynamic file structure.

### 📐 System Layers

| Layer | Technologies / Frameworks Used | Responsibility |
| :--- | :--- | :--- |
| **Graphics & Physics** | Canvas 2D API | Renders interactive cyber networks and a smooth DevOps monitoring chart. |
| **Business Logic** | Async JavaScript, DOM Manipulation | Powers the terminal simulator, SQL Sandbox, LocalStorage state management, and data streaming. |
| **Artificial Intelligence** | Google Gemini 2.5 Flash API | A dynamic chat assistant handling async communication in the background. |
| **Audio Engine** | Web Audio API | Synthesizes futuristic UI sounds programmatically without loading heavy external audio files (.mp3/.wav). |

---

## 🧠 "Insane" Features & Core System Logic

### 🌐 Multi-Language Architecture & Localization (i18n)
The cyber dashboard provides global accessibility with structural multi-language support, managing language states asynchronously:
* **Supported Languages:** **English (EN)** (Global standard), **Türkçe (TR)** (Native core), and **Deutsch (DE)** (European localization).
* **Asynchronous Dictionary Loading:** Instead of reloading the page, the user interface switches languages instantly by rendering language packs dynamically via centralized JSON matrix mapping.
* **Persistent State Memory:** The selected language is saved in the browser's `LocalStorage` loop, ensuring the preferences persist across multiple sessions.

### 🌀 A. Cyberconstellation Plexus (Spherical Cyber Network)
I completely eliminated the old-school square particle architecture. Instead, I built a cyber network (plexus) made of glowing round neon spheres that symbolize data packet transfers between C# and SQL Server:
* **Spring Physics:** Particles react gravitationally based on the mouse pointer's position. They bend when the mouse approaches and seamlessly snap back to their original coordinates when it moves away.
* **Parallax Depth:** Particles move across 3 different layers (background, midground, foreground) with varying speeds and opacities, creating a realistic 3D spatial depth.
* **Asynchronous Data Packets:** Tiny asynchronous lights travel randomly across connecting lines to simulate live data traffic within backend databases.

### 💻 B. Interactive Developer Terminal (`egesul.sh`)
The 'About Me' section features a cyber terminal that acts as a fully functional command-line simulator accepting keyboard inputs.
* I engineered a system that listens to keyboard events (`keydown`) via JavaScript.
* Commands like `help`, `about`, `skills`, `goals`, and `clear` are processed using asynchronous string analysis, instantly injecting outputs into the DOM. The `clear` command wipes the screen history while preserving the CLI prompt.

### 📊 C. DevOps Health Monitor (Live System Chart)
Right next to the terminal sits a DevOps dashboard simulating a live server status.
* Realistically generated values for **CPU Load**, **Network Latency (ms)**, and **Redis Cache Hit-Rate** update automatically every 2 seconds.
* The latency chart is drawn dynamically and smoothly using the Canvas 2D context.

### 🗄️ D. Interactive SQL Sandbox & Query Runner
Saying *"I know SQL"* in the software industry is easy; I wanted to build a live sandbox to prove it.
* I structured a lightweight JSON database architecture on JavaScript that simulates mock tables: `GymMembers` (SaaS Project), `OzanCmsPosts` (CMS Portal), and `SecurityGatewayLogs` (Cybersecurity Network Logs).
* When a user selects a preset query or types a custom `SELECT` statement into the input field, the query is processed asynchronously. Correct queries instantly render data inside a neon data table, while invalid ones log a cyber error trace (`[!] ERROR`).

### 🤖 E. Gemini 2.5 Flash AI Integration (`Ege-AI`)
The most prestigious module of this portfolio is a cyber chat assistant that communicates asynchronously with Google's LLM model.
* **Custom System Prompt:** A hidden instruction runs in the background, anchoring the AI as the *"Ege Sül Cyber Assistant"*. It defines my identity, my technical competencies (C#/.NET Core, MS SQL, Python), my key projects (Gym SaaS, Burger House, CMS, CyberAuth), and my long-term goal of becoming an Enterprise C# Software Architect.
* **Exponential Backoff:** The asynchronous API calls are protected against network drops or temporary downtime. If a request fails, the system triggers an automatic retry up to 5 times, doubling the delay after each attempt (1s, 2s, 4s, 8s, 16s).

### 🔊 F. Futuristic Synthesized Audio Engine (Web Audio API)
One of the most unique details of the site is an audio synthesizer that triggers the browser's native audio processor without loading external files.
* **OscillatorNode:** Digital beeps are generated asynchronously using various frequencies and waveforms (Sine, Triangle, Sawtooth) whenever UI buttons are clicked or terminal keys are pressed.
* **GainNode:** A premium cyber atmosphere is achieved by managing sound attenuation via exponential decay.

---

## 🚀 How to Run (Nasıl Çalıştırılır?)

### 📋 Prerequisites
To run this live dashboard locally, you do not need database setups or package installations. You only need:
* A modern web browser (Google Chrome, Microsoft Edge, Brave, or Safari).
* A basic local development server environment (highly recommended for API features).

### 💻 Step-by-Step Execution
Choose one of the simple methods below to launch the dashboard instantly:

#### Option A: VS Code Live Server (Recommended)
1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. The site will run securely at `http://127.0.0.1:5500/index.html`.

#### Option B: Python Local Server
1. Open your terminal or console.
2. Navigate to your project directory:
   ```bash
   https://github.com/EgeSul/my-portfolio

## 📂 Project Directory Structure
```text
├── index.html          # Monolithic architecture: Contains HTML5 layout, CSS3 variables, and Vanilla JS Engine
├── README.md           # Technical documentation and system architecture guide
└── .gitignore          # Repository isolation configuration
