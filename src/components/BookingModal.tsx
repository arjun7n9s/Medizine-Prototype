import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function BookingModal({ doctorName }: { doctorName: string }) {
    const [date, setDate] = useState<string>("")
    const [time, setTime] = useState<string>("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleBooking = () => {
        if (!date || !time) {
            alert("Please select both date and time")
            return
        }
        setIsSubmitted(true)
    }

    if (isSubmitted) {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <Button size="lg" className="w-full sm:w-auto">Book Appointment</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle className="text-center text-green-600">Booking Confirmed!</DialogTitle>
                        <DialogDescription className="text-center pt-4">
                            Your appointment with {doctorName} has been scheduled.
                            <br />
                            <span className="font-semibold block mt-2">
                                {new Date(date).toLocaleDateString()} at {time}
                            </span>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-center">
                        <Button onClick={() => setIsSubmitted(false)} className="w-full">Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="lg" className="w-full sm:w-auto">Book Appointment</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Book Appointment</DialogTitle>
                    <DialogDescription>
                        Schedule a visit with {doctorName}.
                    </DialogDescription>
                </DialogHeader>

                <Tabs defaultValue="in-person" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-4">
                        <TabsTrigger value="in-person">In-Person Visit</TabsTrigger>
                        <TabsTrigger value="video">Video Consult</TabsTrigger>
                    </TabsList>

                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="date">Date</Label>
                            <div className="relative">
                                <Input
                                    type="date"
                                    id="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="time">Time Slot</Label>
                            <Select onValueChange={setTime}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a time" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="09:00">09:00 AM</SelectItem>
                                    <SelectItem value="10:00">10:00 AM</SelectItem>
                                    <SelectItem value="11:00">11:00 AM</SelectItem>
                                    <SelectItem value="14:00">02:00 PM</SelectItem>
                                    <SelectItem value="15:00">03:00 PM</SelectItem>
                                    <SelectItem value="16:00">04:00 PM</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="reason">Reason for Visit</Label>
                            <Input id="reason" placeholder="e.g., Fever, Checkup..." />
                        </div>
                    </div>
                </Tabs>

                <DialogFooter>
                    <Button onClick={handleBooking} className="w-full">Confirm Booking</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
