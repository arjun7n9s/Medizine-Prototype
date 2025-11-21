import { Star, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link } from "react-router-dom"

interface Doctor {
    id: number
    name: string
    specialization: string
    experience: string
    rating: number
    reviews: number
    location: string
    distance: string
    fee: string
    availability: string
    image: string
    languages: string[]
}

interface DoctorCardProps {
    doctor: Doctor
}

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"

import { useNavigate } from "react-router-dom"

export function DoctorCard({ doctor }: DoctorCardProps) {
    const [isReviewOpen, setIsReviewOpen] = useState(false)
    const [rating, setRating] = useState(0)
    const navigate = useNavigate()

    const handleCardClick = () => {
        navigate(`/doctors/${doctor.id}`)
    }

    return (
        <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer" onClick={handleCardClick}>
            <CardContent className="p-6">
                <div className="flex gap-4">
                    <Avatar className="h-24 w-24 rounded-lg">
                        <AvatarImage src={doctor.image} alt={doctor.name} className="object-cover" />
                        <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 space-y-2">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-bold text-lg hover:text-primary transition-colors">{doctor.name}</h3>
                                <p className="text-sm text-muted-foreground">{doctor.specialization}</p>
                            </div>
                            <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded text-yellow-700 text-xs font-bold">
                                <Star className="h-3 w-3 fill-current" />
                                {doctor.rating}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" /> {doctor.location} ({doctor.distance})
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" /> {doctor.experience} exp
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-2">
                            {doctor.languages.map((lang) => (
                                <Badge key={lang} variant="secondary" className="text-xs font-normal">
                                    {lang}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="flex-col gap-4 bg-muted/30 p-4">
                <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Consultation Fee</span>
                        <span className="font-bold text-primary">{doctor.fee}</span>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={(e) => {
                            e.stopPropagation()
                            setIsReviewOpen(!isReviewOpen)
                        }}>
                            {isReviewOpen ? "Close" : "Write Review"}
                        </Button>
                        <Button size="sm" asChild onClick={(e) => e.stopPropagation()}>
                            <Link to={`/booking?type=doctor&id=${doctor.id}`}>Book Now</Link>
                        </Button>
                    </div>
                </div>
                {isReviewOpen && (
                    <div className="w-full space-y-3 border-t pt-4 animate-in slide-in-from-top-2" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Rate your experience</span>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className={`h-5 w-5 cursor-pointer transition-colors ${star <= rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200 hover:text-yellow-400 hover:fill-yellow-400"}`}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setRating(star)
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                        <Textarea placeholder="Share your experience..." className="min-h-[80px]" />
                        <Button size="sm" className="w-full" onClick={() => {
                            setIsReviewOpen(false)
                            // In a real app, we would submit the review here
                        }}>
                            Submit Review
                        </Button>
                    </div>
                )}
            </CardFooter>
        </Card>
    )
}
