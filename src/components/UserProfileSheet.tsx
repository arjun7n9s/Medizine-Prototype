import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, Phone, Activity, AlertCircle, FileText } from "lucide-react"

export function UserProfileSheet({ children }: { children: React.ReactNode }) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                {children}
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md flex flex-col">
                <SheetHeader>
                    <SheetTitle>User Profile</SheetTitle>
                </SheetHeader>

                <ScrollArea className="h-full pr-4 mt-4">
                    <div className="space-y-6">
                        {/* Header Section */}
                        <div className="flex flex-col items-center space-y-2">
                            <Avatar className="h-24 w-24">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div className="text-center">
                                <h2 className="text-xl font-bold">John Doe</h2>
                                <p className="text-sm text-muted-foreground">ID: MED-2024-8892</p>
                            </div>
                        </div>

                        <Accordion type="single" collapsible className="w-full" defaultValue="basic">
                            {/* Basic Profile Data */}
                            <AccordionItem value="basic">
                                <AccordionTrigger className="hover:no-underline">
                                    <div className="flex items-center gap-2">
                                        <User className="h-4 w-4 text-primary" />
                                        <span>Basic Profile</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="grid grid-cols-2 gap-4 p-2">
                                        <div>
                                            <p className="text-xs text-muted-foreground">Full Name</p>
                                            <p className="font-medium">John Doe</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground">Date of Birth</p>
                                            <p className="font-medium">12 Mar 1990</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground">Gender</p>
                                            <p className="font-medium">Male</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground">Phone</p>
                                            <p className="font-medium">+91 98765 43210</p>
                                        </div>
                                        <div className="col-span-2">
                                            <p className="text-xs text-muted-foreground">Email</p>
                                            <p className="font-medium">john.doe@example.com</p>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            {/* Medical Profile */}
                            <AccordionItem value="medical">
                                <AccordionTrigger className="hover:no-underline">
                                    <div className="flex items-center gap-2">
                                        <Activity className="h-4 w-4 text-primary" />
                                        <span>Medical Profile</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="grid grid-cols-3 gap-4 p-2">
                                        <div className="bg-slate-50 p-2 rounded-md text-center">
                                            <p className="text-xs text-muted-foreground">Blood Group</p>
                                            <p className="font-bold text-lg text-primary">O+</p>
                                        </div>
                                        <div className="bg-slate-50 p-2 rounded-md text-center">
                                            <p className="text-xs text-muted-foreground">Height</p>
                                            <p className="font-bold text-lg">175 cm</p>
                                        </div>
                                        <div className="bg-slate-50 p-2 rounded-md text-center">
                                            <p className="text-xs text-muted-foreground">Weight</p>
                                            <p className="font-bold text-lg">70 kg</p>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            {/* Emergency Issues */}
                            <AccordionItem value="emergency">
                                <AccordionTrigger className="hover:no-underline">
                                    <div className="flex items-center gap-2">
                                        <AlertCircle className="h-4 w-4 text-destructive" />
                                        <span>Emergency Issues</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-4 p-2">
                                        <div>
                                            <p className="text-xs text-muted-foreground mb-1">Emergency Contacts</p>
                                            <div className="flex items-center gap-2 bg-red-50 p-2 rounded-md border border-red-100">
                                                <Phone className="h-4 w-4 text-red-500" />
                                                <div>
                                                    <p className="font-medium text-sm">Jane Doe (Wife)</p>
                                                    <p className="text-xs text-muted-foreground">+91 98765 43211</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground mb-1">Allergies</p>
                                            <div className="flex flex-wrap gap-2">
                                                <Badge variant="destructive">Peanuts</Badge>
                                                <Badge variant="destructive">Penicillin</Badge>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            {/* Long-run Diseases */}
                            <AccordionItem value="chronic">
                                <AccordionTrigger className="hover:no-underline">
                                    <div className="flex items-center gap-2">
                                        <FileText className="h-4 w-4 text-blue-500" />
                                        <span>Long-run Diseases</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-2 p-2">
                                        <div className="border rounded-md p-3">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-medium text-sm">Hypertension</h4>
                                                <Badge variant="outline" className="text-xs">Since 2019</Badge>
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                Taking Amlodipine 5mg daily. Regular checkups every 3 months.
                                            </p>
                                        </div>
                                        <div className="border rounded-md p-3">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-medium text-sm">Asthma</h4>
                                                <Badge variant="outline" className="text-xs">Since Childhood</Badge>
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                Mild intermittent. Inhaler used as needed.
                                            </p>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Button variant="outline" className="w-full text-destructive hover:text-destructive hover:bg-destructive/10">
                            Log Out
                        </Button>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}
