import { useParams } from "react-router-dom"
import { MapPin, Clock, Star, Award, Globe, ShieldCheck } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { BookingModal } from "@/components/BookingModal"
import doctorsData from "@/data/doctors.json"

export default function DoctorProfile() {
    const { id } = useParams()
    const doctor = doctorsData.find(d => d.id === Number(id))

    if (!doctor) {
        return <div className="container py-12 text-center">Doctor not found</div>
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Profile Info */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Header Card */}
                    <div className="bg-card rounded-xl border p-6 shadow-sm">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <Avatar className="h-32 w-32 rounded-xl">
                                <AvatarImage src={doctor.image} className="object-cover" />
                                <AvatarFallback>{doctor.name[0]}</AvatarFallback>
                            </Avatar>

                            <div className="flex-1 space-y-2">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h1 className="text-2xl font-bold">{doctor.name}</h1>
                                        <p className="text-lg text-muted-foreground">{doctor.specialization}</p>
                                    </div>
                                    <div className="flex flex-col items-end gap-1">
                                        <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-bold">
                                            <Star className="h-4 w-4 fill-current" /> {doctor.rating}
                                        </div>
                                        <span className="text-xs text-muted-foreground">{doctor.reviews} Reviews</span>
                                    </div>
                                </div>

                                <p className="text-slate-600">{doctor.about}</p>

                                <div className="flex flex-wrap gap-4 pt-2">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Award className="h-4 w-4" /> {doctor.experience} Experience
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Globe className="h-4 w-4" /> {doctor.languages.join(", ")}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <MapPin className="h-4 w-4" /> {doctor.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs for Info */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">Patient Reviews</h2>

                        {/* Review Summary */}
                        <div className="bg-card rounded-xl border p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-sm">
                                    <span>Doctor Friendliness</span>
                                    <Progress value={90} className="w-32" />
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span>Explanation Clarity</span>
                                    <Progress value={85} className="w-32" />
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span>Wait Time</span>
                                    <Progress value={70} className="w-32" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <Avatar>
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold">John Doe</span>
                                            <span className="text-xs text-muted-foreground">2 days ago</span>
                                            <span className="flex items-center gap-0.5 text-[10px] font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full">
                                                <ShieldCheck className="h-3 w-3" /> Verified Patient
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1 mt-1 mb-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                                            ))}
                                        </div>
                                        <p className="text-sm text-slate-600">
                                            Great doctor, very patient and explained everything clearly.
                                        </p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex gap-4">
                                    <Avatar>
                                        <AvatarFallback>AS</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold">Alice Smith</span>
                                            <span className="text-xs text-muted-foreground">1 week ago</span>
                                        </div>
                                        <div className="flex items-center gap-1 mt-1 mb-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                                            ))}
                                        </div>
                                        <p className="text-sm text-slate-600">
                                            Wait time was a bit long, but the treatment was excellent.
                                        </p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex gap-4">
                                    <Avatar>
                                        <AvatarFallback>RK</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold">Rahul Kumar</span>
                                            <span className="text-xs text-muted-foreground">2 weeks ago</span>
                                            <span className="flex items-center gap-0.5 text-[10px] font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full">
                                                <ShieldCheck className="h-3 w-3" /> Verified Patient
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1 mt-1 mb-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                                            ))}
                                        </div>
                                        <p className="text-sm text-slate-600">
                                            Highly recommended! The diagnosis was spot on.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Booking Card */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 bg-card rounded-xl border p-6 shadow-lg space-y-6">
                        <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Consultation Fee</span>
                            <span className="text-2xl font-bold text-primary">{doctor.fee}</span>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 p-2 rounded">
                                <Clock className="h-4 w-4" /> {doctor.availability}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground p-2">
                                <MapPin className="h-4 w-4" /> {doctor.location}
                            </div>
                        </div>

                        <BookingModal doctorName={doctor.name} />

                        <p className="text-xs text-center text-muted-foreground">
                            No booking fee • Free cancellation
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
