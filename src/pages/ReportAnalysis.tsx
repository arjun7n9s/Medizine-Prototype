import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, FileText, CheckCircle2, Clock, Calendar, AlertTriangle, Star, ShieldCheck } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function ReportAnalysis() {
    const [step, setStep] = useState<"upload" | "analyzing" | "results">("upload")
    const [progress, setProgress] = useState(0)
    const [reportFile, setReportFile] = useState<File | null>(null)
    const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null)
    const [rating, setRating] = useState(0)

    const handleAnalyze = () => {
        if (!reportFile && !prescriptionFile) return

        setStep("analyzing")
        let p = 0
        const interval = setInterval(() => {
            p += 5
            setProgress(p)
            if (p >= 100) {
                clearInterval(interval)
                setStep("results")
            }
        }, 100)
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "report" | "prescription") => {
        if (e.target.files && e.target.files[0]) {
            if (type === "report") setReportFile(e.target.files[0])
            else setPrescriptionFile(e.target.files[0])
        }
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold mb-2">Medical Report & Prescription Analysis</h1>
                <p className="text-muted-foreground">Upload your documents for AI-powered insights and reminders</p>
            </div>

            {step === "upload" && (
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Upload Medical Report</CardTitle>
                            <CardDescription>Lab reports, scan results, etc.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="border-2 border-dashed rounded-lg p-8 text-center hover:bg-accent/50 transition-colors cursor-pointer relative">
                                <input
                                    type="file"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    onChange={(e) => handleFileChange(e, "report")}
                                    accept=".pdf,.jpg,.png,.jpeg"
                                />
                                <FileText className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                                <p className="text-sm font-medium">
                                    {reportFile ? reportFile.name : "Drop file here or click to upload"}
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Upload Prescription</CardTitle>
                            <CardDescription>Doctor's handwritten notes</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="border-2 border-dashed rounded-lg p-8 text-center hover:bg-accent/50 transition-colors cursor-pointer relative">
                                <input
                                    type="file"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    onChange={(e) => handleFileChange(e, "prescription")}
                                    accept=".pdf,.jpg,.png,.jpeg"
                                />
                                <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                                <p className="text-sm font-medium">
                                    {prescriptionFile ? prescriptionFile.name : "Drop file here or click to upload"}
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="md:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Patient Details</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label>Patient Name</Label>
                                    <Input placeholder="Full Name" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Age</Label>
                                    <Input type="number" placeholder="Age" />
                                </div>
                                <div className="space-y-2">
                                    <Label>WhatsApp Number</Label>
                                    <Input type="tel" placeholder="+91 98765 43210" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Email ID</Label>
                                    <Input type="email" placeholder="john@example.com" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className="w-full"
                                    size="lg"
                                    onClick={handleAnalyze}
                                    disabled={!reportFile && !prescriptionFile}
                                >
                                    Analyze Documents
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            )}

            {step === "analyzing" && (
                <Card className="max-w-md mx-auto text-center py-12">
                    <CardContent className="space-y-6">
                        <div className="relative h-20 w-20 mx-auto">
                            <div className="absolute inset-0 border-4 border-primary/20 rounded-full animate-ping"></div>
                            <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
                            <FileText className="absolute inset-0 m-auto h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2">Analyzing Documents...</h2>
                            <p className="text-muted-foreground mb-4">AI is decoding handwriting and extracting insights</p>
                            <Progress value={progress} className="h-2" />
                        </div>
                    </CardContent>
                </Card>
            )}

            {step === "results" && (
                <div className="space-y-8">
                    {/* Diagnosis Summary */}
                    <Card className="bg-blue-50 border-blue-200">
                        <CardHeader>
                            <CardTitle className="text-blue-800 flex items-center gap-2">
                                <CheckCircle2 className="h-6 w-6" /> Analysis Complete
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold text-blue-900 mb-2">Diagnosis Detected</h3>
                                <p className="text-lg font-medium">Viral Fever with Mild Dehydration</p>
                                <p className="text-sm text-blue-700 mt-1">
                                    Based on elevated temperature and blood report markers.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-900 mb-2">Next Follow-up</h3>
                                <div className="flex items-center gap-2 text-blue-800">
                                    <Calendar className="h-5 w-5" />
                                    <span className="font-bold">Nov 25, 2025</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Decoded Prescription */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <FileText className="h-5 w-5 text-primary" /> Decoded Prescription
                                </CardTitle>
                                <CardDescription>AI extracted medicines from handwriting</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[
                                    { name: "Paracetamol 650mg", dose: "1 tablet", freq: "After food", time: "Morning, Night" },
                                    { name: "Amoxicillin 500mg", dose: "1 capsule", freq: "After food", time: "Morning, Afternoon, Night" },
                                    { name: "ORS Sachet", dose: "1 sachet", freq: "In 1L water", time: "Sip throughout day" }
                                ].map((med, i) => (
                                    <div key={i} className="flex justify-between items-start p-3 bg-slate-50 rounded-lg">
                                        <div>
                                            <p className="font-bold">{med.name}</p>
                                            <p className="text-sm text-muted-foreground">{med.dose} • {med.freq}</p>
                                        </div>
                                        <Badge variant="outline">{med.time}</Badge>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Schedule & Reminders */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-primary" /> Medicine Schedule
                                </CardTitle>
                                <CardDescription>Reminders set for WhatsApp & Email</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6 relative pl-4 border-l-2 border-slate-200 ml-2">
                                    {[
                                        { time: "08:00 AM", task: "Breakfast" },
                                        { time: "08:30 AM", task: "Paracetamol + Amoxicillin", type: "med" },
                                        { time: "01:00 PM", task: "Lunch" },
                                        { time: "01:30 PM", task: "Amoxicillin", type: "med" },
                                        { time: "08:00 PM", task: "Dinner" },
                                        { time: "08:30 PM", task: "Paracetamol + Amoxicillin", type: "med" },
                                    ].map((item, i) => (
                                        <div key={i} className="relative">
                                            <div className={`absolute -left-[21px] top-1 h-3 w-3 rounded-full border-2 ${item.type === 'med' ? 'bg-primary border-primary' : 'bg-slate-200 border-slate-300'}`} />
                                            <p className="text-sm font-mono text-muted-foreground">{item.time}</p>
                                            <p className={`font-medium ${item.type === 'med' ? 'text-primary' : ''}`}>{item.task}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Precautions */}
                    <Card className="border-orange-200 bg-orange-50">
                        <CardHeader>
                            <CardTitle className="text-orange-800 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5" /> Precautions & Care
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid md:grid-cols-2 gap-4">
                            <ul className="list-disc list-inside space-y-1 text-orange-900">
                                <li>Drink at least 3 liters of water daily.</li>
                                <li>Avoid oily and spicy food.</li>
                                <li>Take complete bed rest for 2 days.</li>
                            </ul>
                            <ul className="list-disc list-inside space-y-1 text-orange-900">
                                <li>Monitor temperature every 6 hours.</li>
                                <li>Use lukewarm water for sponge bath if fever &gt; 102°F.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Review Experience */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" /> Rate Your Experience
                            </CardTitle>
                            <CardDescription>
                                Help others by reviewing Dr. Sarah Johnson and City Heart Center.
                                <br />
                                <span className="flex items-center gap-1 text-green-600 font-medium mt-1">
                                    <ShieldCheck className="h-4 w-4" /> Verified Patient Review
                                </span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className={`h-8 w-8 cursor-pointer transition-colors ${star <= rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200 hover:text-yellow-400 hover:fill-yellow-400"}`}
                                        onClick={() => setRating(star)}
                                    />
                                ))}
                            </div>
                            <Textarea placeholder="Share your experience with the doctor and hospital facilities..." />
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full sm:w-auto">Submit Verified Review</Button>
                        </CardFooter>
                    </Card>
                </div>
            )}
        </div>
    )
}
