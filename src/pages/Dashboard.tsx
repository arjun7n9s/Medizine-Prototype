import { Clock, Users, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import hospitalsData from "@/data/hospitals.json"

export default function Dashboard() {
    return (
        <div className="container mx-auto px-4 py-8 space-y-8">
            <div>
                <h1 className="text-3xl font-bold">Live Wait Times</h1>
                <p className="text-muted-foreground">Real-time updates from local hospitals and clinics.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hospitalsData.map((hospital) => (
                    <Card key={hospital.id} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                                <CardTitle className="text-xl">{hospital.name}</CardTitle>
                                {hospital.emergency && (
                                    <Badge variant="destructive">Emergency</Badge>
                                )}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground gap-1">
                                <MapPin className="h-3 w-3" /> {hospital.location} ({hospital.distance})
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-50 p-3 rounded-lg text-center">
                                    <div className="flex justify-center mb-1">
                                        <Clock className="h-5 w-5 text-primary" />
                                    </div>
                                    <p className="text-xs text-muted-foreground">Avg Wait</p>
                                    <p className="text-lg font-bold">{hospital.waitTime}</p>
                                </div>
                                <div className="bg-slate-50 p-3 rounded-lg text-center">
                                    <div className="flex justify-center mb-1">
                                        <Users className={`h-5 w-5 ${hospital.crowdLevel === 'High' ? 'text-red-500' :
                                            hospital.crowdLevel === 'Medium' ? 'text-yellow-500' : 'text-green-500'
                                            }`} />
                                    </div>
                                    <p className="text-xs text-muted-foreground">Crowd</p>
                                    <p className="text-lg font-bold">{hospital.crowdLevel}</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Capacity</span>
                                    <span className="font-medium">
                                        {hospital.crowdLevel === 'High' ? '85%' :
                                            hospital.crowdLevel === 'Medium' ? '50%' : '20%'}
                                    </span>
                                </div>
                                <Progress
                                    value={
                                        hospital.crowdLevel === 'High' ? 85 :
                                            hospital.crowdLevel === 'Medium' ? 50 : 20
                                    }
                                    className={`h-2 ${hospital.crowdLevel === 'High' ? '[&>div]:bg-red-500' :
                                        hospital.crowdLevel === 'Medium' ? '[&>div]:bg-yellow-500' : '[&>div]:bg-green-500'
                                        }`}
                                />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
