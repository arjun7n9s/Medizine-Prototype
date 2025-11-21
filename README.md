# Medezine - Healthcare Platform Prototype

Medezine is a modern, user-centric healthcare platform designed to bridge the gap between patients and medical services. This prototype demonstrates a seamless digital health experience, featuring AI-powered symptom analysis, doctor discovery, medicine delivery, and emergency services.

> [!IMPORTANT]
> **PROTOTYPE DISCLAIMER**: This project is a **frontend-only prototype** developed for Design Thinking demonstration purposes. It **does not have a connected backend database**. All data (doctors, medicines, hospitals) is mocked, and actions such as booking appointments or purchasing medicines are **simulated** and do not process real transactions.

## 🚀 Key Features

*   **🤖 AI Symptom Analysis**: Powered by Google Gemini, this feature analyzes user symptoms to suggest potential conditions and recommend appropriate specialists.
*   **👨‍⚕️ Doctor Search & Booking**: Browse verified doctors by specialty, experience, and consultation fees. Includes a simulated booking flow.
*   **💊 Medicine Delivery**: A complete e-pharmacy interface allowing users to browse medicines, view details, and add items to a cart.
*   **🏥 Live Wait Times**: specific dashboard to view estimated wait times and crowd levels at nearby hospitals (using mock data).
*   **🚑 Emergency & First Aid**: Quick access to emergency contacts (Ambulance, Police) and essential first aid guides.
*   **📄 Report Analysis**: A feature to upload medical reports for AI-driven summaries and insights (simulated).
*   **🌐 Multilingual Support**: Full support for **English** and **Hindi** languages.

## 🛠️ Tech Stack

*   **Framework**: React + TypeScript + Vite
*   **Styling**: Tailwind CSS
*   **UI Components**: Shadcn UI (Radix Primitives)
*   **Icons**: Lucide React
*   **Animations**: Framer Motion
*   **AI Integration**: Google Gemini API

## 📦 Getting Started

Follow these steps to run the prototype locally:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/arjun7n9s/Medizine-Prototype.git
    cd Medizine-Prototype
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env` file in the root directory and add your Gemini API key for the Symptom Checker to work:
    ```env
    VITE_GEMINI_API_KEY=your_api_key_here
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

## ⚠️ Note

This application is for **demonstration purposes only**. It does not provide real medical advice. In case of a medical emergency, please contact your local emergency services immediately.
