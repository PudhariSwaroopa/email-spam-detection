# Email Spam Detection Using Machine Learning

A B.Tech AIML microproject that implements a live email spam detection system using a hybrid heuristic and ML-based approach. The project demonstrates classification using keywords, patterns, and scoring mechanisms to distinguish spam from legitimate (ham) emails with high accuracy.

---

##Link: 
https://email-spam-detection-cyan.vercel.app/

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Test Inputs](#test-inputs)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Project Overview

This project provides an interactive interface to analyze email messages and predict whether they are spam or legitimate. The detection is based on:

- Keyword-based heuristic analysis  
- Pattern detection (URLs, exclamation marks, uppercase ratio)  
- Confidence scoring  
- Support for spammy patterns like links, credit card scams, prize notifications, and urgent requests  

The frontend is built using **React + TypeScript + TailwindCSS**, and the spam detection logic runs directly in the browser for instant feedback.

---

## Features

- Real-time spam detection for any email input  
- Enhanced keyword and pattern-based scoring for better accuracy  
- Confidence score and model info displayed  
- Sample spam and ham emails for quick testing  
- Works offline in the browser (no backend required)  
- Clean, responsive, and interactive UI  

---

## Tech Stack

- **Frontend:** React, TypeScript, TailwindCSS  
- **Components:** Shadcn UI (Cards, Buttons, Textarea, Badge)  
- **Icons:** Lucide React  
- **Logic:** Hybrid heuristic spam detection  
- **Development:** Vite  

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/PudhariSwaroopa/email-spam-detection.git
cd email-spam-detection
