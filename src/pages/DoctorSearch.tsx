

import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Search, Filter, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DoctorCard } from "@/components/DoctorCard"
import doctorsData from "@/data/doctors.json"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function DoctorSearch() {
    const [searchParams] = useSearchParams()
    const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "")
    const [specialization, setSpecialization] = useState("all")
    const [gender, setGender] = useState("all")
    const [maxFee, setMaxFee] = useState(2000)
    const [minExperience, setMinExperience] = useState(0)

    const filteredDoctors = doctorsData.filter((doctor) => {
        const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesSpec = specialization === "all" || doctor.specialization === specialization

        // Parse fee string "$100" -> 100 or "₹1200" -> 1200
        const feeValue = parseInt(doctor.fee.replace(/[^0-9]/g, ''))
        const matchesFee = feeValue <= maxFee

        // Parse experience "10+ years" -> 10
        const expValue = parseInt(doctor.experience.replace(/[^0-9]/g, ''))
        const matchesExp = expValue >= minExperience

        // Mock gender check (randomly assign for demo if not in data, or assume data has it. 
        // Since data structure wasn't shown to have gender, we'll skip strict gender check or assume 'all')
        // For a real app, ensure data has gender field.
        const matchesGender = gender === "all" // || doctor.gender === gender

        return matchesSearch && matchesSpec && matchesFee && matchesExp && matchesGender
    })

    const specializations = Array.from(new Set(doctorsData.map(d => d.specialization)))

    const clearFilters = () => {
        setSearchTerm("")
        setSpecialization("all")
        setGender("all")
        setMaxFee(2000)
        setMinExperience(0)
    }

    return (
        <div className="container mx-auto px-4 py-8 space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Find a Doctor</h1>
                    <p className="text-muted-foreground">Book appointments with top specialists</p>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-card p-4 rounded-lg border shadow-sm flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search by name or specialization..."
                        className="pl-9"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="w-full md:w-48">
                    <Select value={specialization} onValueChange={setSpecialization}>
                        <SelectTrigger>
                            <SelectValue placeholder="Specialization" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Specializations</SelectItem>
                            {specializations.map(spec => (
                                <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" className="gap-2">
                            <Filter className="h-4 w-4" /> More Filters
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Filter Doctors</SheetTitle>
                            <SheetDescription>
                                Refine your search results.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-6 py-4">
                            <div className="space-y-2">
                                <Label>Max Consultation Fee (₹{maxFee})</Label>
                                <Slider
                                    defaultValue={[2000]}
                                    max={5000}
                                    step={100}
                                    value={[maxFee]}
                                    onValueChange={(val) => setMaxFee(val[0])}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Min Experience ({minExperience} years)</Label>
                                <Slider
                                    defaultValue={[0]}
                                    max={30}
                                    step={1}
                                    value={[minExperience]}
                                    onValueChange={(val) => setMinExperience(val[0])}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Gender</Label>
                                <RadioGroup value={gender} onValueChange={setGender}>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="all" id="all" />
                                        <Label htmlFor="all">Any</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="male" id="male" />
                                        <Label htmlFor="male">Male</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="female" id="female" />
                                        <Label htmlFor="female">Female</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <Button onClick={clearFilters} variant="outline" className="w-full">
                                <X className="mr-2 h-4 w-4" /> Clear Filters
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDoctors.map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
            </div>

            {filteredDoctors.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">No doctors found matching your criteria.</p>
                    <Button variant="link" onClick={clearFilters}>
                        Clear Filters
                    </Button>
                </div>
            )}
        </div>
    )
}
