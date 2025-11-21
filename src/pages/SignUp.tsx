import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Stethoscope, Calendar, Pill, FileText, Shield, Activity, TrendingUp } from "lucide-react"
import { Link } from "react-router-dom"

export default function SignUp() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Join Medezine</h1>
                <p className="text-xl text-muted-foreground">Choose how you want to use our platform</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Patient Card */}
                <Card className="relative overflow-hidden hover:shadow-lg transition-shadow border-primary/20">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <User className="h-32 w-32" />
                    </div>
                    <CardHeader>
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                            <User className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-2xl">For Patients</CardTitle>
                        <CardDescription className="text-base">
                            Get access to top-rated doctors and manage your health journey.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <h4 className="font-semibold text-sm uppercase text-muted-foreground tracking-wider">Benefits</h4>
                            <ul className="grid gap-3">
                                <li className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                                        <Calendar className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-sm font-medium">Instant Appointment Booking</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Pill className="h-4 w-4 text-blue-600" />
                                    </div>
                                    <span className="text-sm font-medium">Medicine Delivery & Reminders</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                                        <FileText className="h-4 w-4 text-purple-600" />
                                    </div>
                                    <span className="text-sm font-medium">AI-Powered Report Analysis</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
                                        <Shield className="h-4 w-4 text-orange-600" />
                                    </div>
                                    <span className="text-sm font-medium">Secure Health Records</span>
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" size="lg" asChild>
                            <Link to="/signup/patient">Sign Up as Patient</Link>
                        </Button>
                    </CardFooter>
                </Card>

                {/* Doctor Card */}
                <Card className="relative overflow-hidden hover:shadow-lg transition-shadow border-blue-500/20">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Stethoscope className="h-32 w-32" />
                    </div>
                    <CardHeader>
                        <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                            <Stethoscope className="h-6 w-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-2xl">For Doctors</CardTitle>
                        <CardDescription className="text-base">
                            Grow your practice and streamline patient management.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <h4 className="font-semibold text-sm uppercase text-muted-foreground tracking-wider">Benefits</h4>
                            <ul className="grid gap-3">
                                <li className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                                        <Activity className="h-4 w-4 text-indigo-600" />
                                    </div>
                                    <span className="text-sm font-medium">Manage Appointments Efficiently</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center">
                                        <FileText className="h-4 w-4 text-pink-600" />
                                    </div>
                                    <span className="text-sm font-medium">Digital Prescriptions & Notes</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
                                        <User className="h-4 w-4 text-teal-600" />
                                    </div>
                                    <span className="text-sm font-medium">Access Patient History</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
                                        <TrendingUp className="h-4 w-4 text-yellow-600" />
                                    </div>
                                    <span className="text-sm font-medium">Grow Your Practice Online</span>
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" variant="outline" size="lg" asChild>
                            <Link to="/signup/doctor">Sign Up as Doctor</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
