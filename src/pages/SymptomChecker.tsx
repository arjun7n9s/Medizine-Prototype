import { useState } from "react"
import { AlertCircle, ArrowRight, Brain, Loader2, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Link } from "react-router-dom"
import { GoogleGenerativeAI } from "@google/generative-ai"

export default function SymptomChecker() {
    const [step, setStep] = useState(1)
    const [symptoms, setSymptoms] = useState("")
    const [duration, setDuration] = useState("")
    const [severity, setSeverity] = useState("")
    const [age, setAge] = useState("")
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [result, setResult] = useState<any>(null)
    const [error, setError] = useState("")

    const handleAnalyze = async () => {
        if (!symptoms || !duration || !severity || !age) {
            setError("Please fill in all fields")
            return
        }

        setIsAnalyzing(true)
        setError("")

        try {
            let analysisText = ""
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY

            if (apiKey && apiKey !== "YOUR_API_KEY_HERE") {
                // Use Real AI if API Key is provided in .env
                try {
                    const genAI = new GoogleGenerativeAI(apiKey)
                    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

                    const prompt = `
                        Act as a medical symptom checker. 
                        Patient details: Age ${age}, Symptoms: ${symptoms}, Duration: ${duration}, Severity: ${severity}.
                        Provide a structured response with:
                        1. Possible Conditions (list 3 most likely)
                        2. Recommended Specialist (e.g., Cardiologist, Dermatologist, General Physician) - BE SPECIFIC.
                        3. Recommended Actions (home care vs see doctor)
                        4. Urgency Level (Low, Medium, High)
                        5. Disclaimer: "This is AI-generated advice and not a substitute for professional medical diagnosis."
                        Keep it concise and professional.
                    `

                    const result = await model.generateContent(prompt)
                    const response = await result.response
                    analysisText = response.text()
                } catch (err) {
                    console.error("AI Error:", err)
                    analysisText = "Error connecting to AI. Falling back to internal database...\n\n" + simulateAnalysis()
                }
            } else {
                // Fallback to Simulation
                await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate delay
                analysisText = simulateAnalysis()
            }

            setResult(analysisText)
            setStep(3)
        } catch (err) {
            setError("An error occurred during analysis. Please try again.")
        } finally {
            setIsAnalyzing(false)
        }
    }

    const simulateAnalysis = () => {
        // Simple keyword-based simulation
        const lowerSymptoms = symptoms.toLowerCase()
        let conditions = "General Viral Infection, Stress/Fatigue, Dehydration"
        let specialist = "General Physician"
        let actions = "Rest, drink plenty of fluids, monitor temperature."
        let urgency = "Low"

        if (lowerSymptoms.includes("chest") || lowerSymptoms.includes("heart")) {
            conditions = "Angina, Anxiety, Muscle Strain"
            specialist = "Cardiologist"
            actions = "Seek immediate medical attention if pain is severe."
            urgency = "High"
        } else if (lowerSymptoms.includes("skin") || lowerSymptoms.includes("rash")) {
            conditions = "Dermatitis, Allergic Reaction, Eczema"
            specialist = "Dermatologist"
            actions = "Keep area clean, avoid scratching, use mild moisturizer."
            urgency = "Low"
        } else if (lowerSymptoms.includes("bone") || lowerSymptoms.includes("joint") || lowerSymptoms.includes("knee")) {
            conditions = "Arthritis, Sprain, Fracture"
            specialist = "Orthopedic Surgeon"
            actions = "RICE (Rest, Ice, Compression, Elevation)."
            urgency = "Medium"
        } else if (lowerSymptoms.includes("child") || (Number(age) < 18 && age !== "")) {
            conditions = "Common Childhood Illness"
            specialist = "Pediatrician"
            actions = "Monitor closely, consult a pediatrician."
            urgency = "Medium"
        }

        return `
            **Possible Conditions:**
            ${conditions}

            **Recommended Specialist:**
            ${specialist}

            **Recommended Actions:**
            ${actions}

            **Urgency Level:** ${urgency}

            *Disclaimer: This is a simulation. Please consult a doctor for accurate diagnosis.*
        `
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-3xl">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
                    <Brain className="h-8 w-8 text-primary" />
                    AI Symptom Analysis
                </h1>
                <p className="text-muted-foreground">
                    Powered by advanced AI to provide preliminary health insights.
                </p>
            </div>

            <Card className="shadow-lg border-t-4 border-t-primary">
                <CardHeader>
                    <CardTitle>
                        {step === 1 && "Step 1: Patient Details"}
                        {step === 2 && "Step 2: Describe Symptoms"}
                        {step === 3 && "Analysis Result"}
                    </CardTitle>
                    <CardDescription>
                        {step === 1 && "Tell us a bit about yourself."}
                        {step === 2 && "Be as specific as possible about what you're feeling."}
                        {step === 3 && "Based on the information provided."}
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                    {step === 1 && (
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="age">Age</Label>
                                <Input
                                    id="age"
                                    placeholder="e.g., 25"
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                />
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="symptoms">What are your symptoms?</Label>
                                <textarea
                                    id="symptoms"
                                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="e.g., I have a throbbing headache and nausea..."
                                    value={symptoms}
                                    onChange={(e) => setSymptoms(e.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label>Duration</Label>
                                    <Select value={duration} onValueChange={setDuration}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="How long?" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="today">Just started today</SelectItem>
                                            <SelectItem value="few_days">A few days</SelectItem>
                                            <SelectItem value="week">A week or more</SelectItem>
                                            <SelectItem value="chronic">Chronic (Months+)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid gap-2">
                                    <Label>Severity</Label>
                                    <Select value={severity} onValueChange={setSeverity}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="How bad is it?" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="mild">Mild (Noticeable but manageable)</SelectItem>
                                            <SelectItem value="moderate">Moderate (Interferes with daily life)</SelectItem>
                                            <SelectItem value="severe">Severe (Unbearable)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            {error && (
                                <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded">
                                    <AlertCircle className="h-4 w-4" />
                                    {error}
                                </div>
                            )}
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-6 animate-in fade-in zoom-in duration-300">
                            <div className="bg-slate-50 p-6 rounded-lg border whitespace-pre-line leading-relaxed text-slate-800">
                                {result}
                            </div>

                            <div className="flex items-center gap-2 text-blue-600 bg-blue-50 p-4 rounded-lg text-sm">
                                <Stethoscope className="h-5 w-5 flex-shrink-0" />
                                <p>
                                    <strong>Next Step:</strong> Based on the analysis, consider booking an appointment with the recommended specialist.
                                </p>
                            </div>

                            <div className="flex items-center gap-2 text-amber-600 bg-amber-50 p-4 rounded-lg text-sm">
                                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                                <p>
                                    <strong>Medical Disclaimer:</strong> This analysis is for informational purposes only.
                                    Always consult with a qualified healthcare provider for diagnosis and treatment.
                                </p>
                            </div>
                        </div>
                    )}
                </CardContent>

                <CardFooter className="flex justify-between">
                    {step > 1 && step < 3 && (
                        <Button variant="outline" onClick={() => setStep(step - 1)}>
                            Back
                        </Button>
                    )}
                    {step === 1 && (
                        <Button className="ml-auto" onClick={() => {
                            if (age) setStep(2)
                            else setError("Please enter your age")
                        }}>
                            Next <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    )}
                    {step === 2 && (
                        <Button className="ml-auto" onClick={handleAnalyze} disabled={isAnalyzing}>
                            {isAnalyzing ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Analyzing...
                                </>
                            ) : (
                                <>
                                    Analyze Symptoms <Brain className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </Button>
                    )}
                    {step === 3 && (
                        <div className="flex gap-4 w-full">
                            <Button variant="outline" className="flex-1" onClick={() => {
                                setStep(1)
                                setSymptoms("")
                                setResult(null)
                            }}>
                                Check Another
                            </Button>
                            <Button className="flex-1" asChild>
                                <Link to="/doctors">Find a Doctor Now</Link>
                            </Button>
                        </div>
                    )}
                </CardFooter>
            </Card>
        </div>
    )
}
