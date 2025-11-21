import { HeartPulse, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-muted/50 border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <HeartPulse className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold text-primary">Medezine</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Providing accessible and modern healthcare solutions for everyone.
                            Your health is our priority.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="/doctors" className="hover:text-primary">Find a Doctor</a></li>
                            <li><a href="/hospitals" className="hover:text-primary">Hospitals</a></li>
                            <li><a href="/symptoms" className="hover:text-primary">Symptom Analysis</a></li>
                            <li><a href="/emergency" className="hover:text-primary">Emergency Services</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary">Online Consultation</a></li>
                            <li><a href="#" className="hover:text-primary">Lab Tests</a></li>
                            <li><a href="/medicines" className="hover:text-primary">Medicine Delivery</a></li>
                            <li><a href="#" className="hover:text-primary">Health Insurance</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-muted-foreground hover:text-primary">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Medezine. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
