import { Phone, Ambulance, Building2, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Emergency() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Emergency Services</h1>
                <p className="text-xl text-slate-600">Quick access to critical emergency contacts.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <Card className="border-red-200 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader className="text-center">
                        <div className="mx-auto bg-red-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                            <Ambulance className="h-10 w-10 text-red-600" />
                        </div>
                        <CardTitle className="text-2xl">Ambulance</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                        <p className="text-muted-foreground">Immediate medical transport.</p>
                        <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-xl h-16">
                            <Phone className="mr-2 h-6 w-6" /> Call 102
                        </Button>
                    </CardContent>
                </Card>

                <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader className="text-center">
                        <div className="mx-auto bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                            <Building2 className="h-10 w-10 text-blue-600" />
                        </div>
                        <CardTitle className="text-2xl">Police</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                        <p className="text-muted-foreground">Emergency police assistance.</p>
                        <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-xl h-16">
                            <Phone className="mr-2 h-6 w-6" /> Call 100
                        </Button>
                    </CardContent>
                </Card>

                <Card className="border-red-200 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader className="text-center">
                        <div className="mx-auto bg-red-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                            <Droplets className="h-10 w-10 text-red-600" />
                        </div>
                        <CardTitle className="text-2xl">Blood Bank</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                        <p className="text-muted-foreground">Find nearest blood donors.</p>
                        <Button size="lg" variant="outline" className="w-full border-red-200 text-red-600 hover:bg-red-50 text-xl h-16">
                            Find Donors
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
