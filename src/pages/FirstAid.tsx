import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import firstAidData from "@/data/firstaid.json"

export default function FirstAid() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-red-600">First Aid Guide</h1>
                <p className="text-muted-foreground">Essential steps for common medical emergencies.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Emergency Procedures</CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        {firstAidData.map((item) => (
                            <AccordionItem key={item.id} value={item.id}>
                                <AccordionTrigger className="text-lg font-semibold hover:text-red-600">
                                    {item.title}
                                </AccordionTrigger>
                                <AccordionContent className="text-base">
                                    <p className="mb-4 text-muted-foreground">{item.description}</p>
                                    <ol className="list-decimal pl-5 space-y-2">
                                        {item.steps.map((step, index) => (
                                            <li key={index} className="pl-2">{step}</li>
                                        ))}
                                    </ol>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>

            <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg text-center">
                <p className="text-red-800 font-medium">
                    Always call emergency services (911) immediately for life-threatening situations.
                </p>
            </div>
        </div>
    )
}
