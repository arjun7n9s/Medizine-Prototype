import { motion } from "framer-motion"
import { Search, Activity, Calendar, Clock, ShieldAlert, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate()

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && searchQuery.trim()) {
            navigate(`/doctors?search=${encodeURIComponent(searchQuery)}`)
        }
    }

    return (
        <div className="flex flex-col gap-12 pb-12">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-20 lg:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex-1 space-y-6 lg:pl-8"
                        >
                            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900">
                                Your Health, <br />
                                <span className="text-primary">Our Priority</span>
                            </h1>
                            <p className="text-lg text-slate-600 max-w-xl">
                                Access top-rated doctors, check symptoms instantly, and manage your appointments with ease.
                                Modern healthcare designed for you.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <div className="relative flex-1 max-w-md">
                                    <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        placeholder="Search doctors, symptoms, clinics..."
                                        className="pl-10 h-12 text-lg shadow-sm"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onKeyDown={handleSearch}
                                    />
                                </div>
                                <Button size="lg" className="h-12 px-8" onClick={() => handleSearch({ key: "Enter" } as any)}>Search</Button>
                            </div>

                            <div className="pt-4">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg animate-pulse"
                                    asChild
                                >
                                    <Link to="/symptoms">
                                        <Activity className="mr-2 h-5 w-5" />
                                        Find Doctor With AI
                                    </Link>
                                </Button>
                            </div>

                            <div className="flex gap-4 pt-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <ShieldAlert className="h-4 w-4 text-primary" /> Verified Doctors
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="h-4 w-4 text-primary" /> 24/7 Support
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex-1 relative"
                        >
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=600"
                                    alt="Doctors Team"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="bg-green-100 p-3 rounded-full">
                                        <Activity className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500">Active Patients</p>
                                        <p className="text-2xl font-bold text-slate-900">12k+</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quick Actions */}
            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Find a Doctor", icon: Search, color: "text-blue-600", bg: "bg-blue-50", link: "/doctors" },
                        { title: "Symptom Analysis", icon: Activity, color: "text-purple-600", bg: "bg-purple-50", link: "/symptoms" },
                        { title: "Book Appointment", icon: Calendar, color: "text-green-600", bg: "bg-green-50", link: "/doctors" },
                        { title: "Emergency", icon: ShieldAlert, color: "text-red-600", bg: "bg-red-50", link: "/emergency" },
                    ].map((item, index) => (
                        <Link key={index} to={item.link}>
                            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-none shadow-sm">
                                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                                    <div className={`${item.bg} p-4 rounded-full`}>
                                        <item.icon className={`h-8 w-8 ${item.color}`} />
                                    </div>
                                    <h3 className="font-semibold text-lg">{item.title}</h3>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Service: Report Analysis */}
            <section className="container mx-auto px-4">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-16 -mb-16 blur-3xl"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium">
                                <Activity className="h-4 w-4" /> New Feature
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                AI-Powered Medical <br /> Report Analysis
                            </h2>
                            <p className="text-indigo-100 text-lg max-w-xl">
                                Upload your lab reports or prescriptions and let our AI decode them for you.
                                Get timely medicine reminders, easy-to-understand insights, and exclusive rewards.
                            </p>
                            <ul className="space-y-3 text-indigo-50">
                                <li className="flex items-center gap-2">
                                    <div className="bg-white/20 p-1 rounded-full"><Clock className="h-4 w-4" /></div>
                                    <span>Automated WhatsApp & Email Reminders</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="bg-white/20 p-1 rounded-full"><ShieldAlert className="h-4 w-4" /></div>
                                    <span>Get Discounts on Medicines & Appointments</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="bg-white/20 p-1 rounded-full"><Star className="h-4 w-4" /></div>
                                    <span>Review doctors to unlock exclusive rewards & discounts</span>
                                </li>
                            </ul>
                            <Button size="lg" variant="secondary" className="h-12 px-8 text-indigo-700 font-bold" asChild>
                                <Link to="/report-analysis">Try It Now</Link>
                            </Button>
                        </div>
                        <div className="flex-1 w-full max-w-md">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-12 w-12 bg-indigo-500 rounded-full flex items-center justify-center">
                                        <Activity className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-indigo-200">Analysis Result</p>
                                        <p className="font-bold text-lg">Viral Fever Detected</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-white/10 p-3 rounded-lg flex justify-between items-center">
                                        <span>Paracetamol</span>
                                        <span className="text-sm bg-green-500/20 px-2 py-1 rounded">8:00 AM</span>
                                    </div>
                                    <div className="bg-white/10 p-3 rounded-lg flex justify-between items-center">
                                        <span>Amoxicillin</span>
                                        <span className="text-sm bg-green-500/20 px-2 py-1 rounded">1:00 PM</span>
                                    </div>
                                    <div className="bg-white/10 p-3 rounded-lg flex justify-between items-center">
                                        <span>Vitamin C</span>
                                        <span className="text-sm bg-green-500/20 px-2 py-1 rounded">8:00 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Services */}
            <section className="container mx-auto px-4 py-12">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold mb-4">Why Choose Medezine?</h2>
                    <p className="text-muted-foreground">
                        We provide comprehensive healthcare services tailored to your needs, ensuring you get the best care possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Qualified Doctors</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Access a network of highly qualified and verified doctors across various specializations.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>24/7 Support</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Round-the-clock medical support and emergency services whenever you need them.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Modern Technology</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Utilizing the latest technology for accurate diagnostics and efficient treatment.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}
