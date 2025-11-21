import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Menu, X, HeartPulse, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UserProfileSheet } from "@/components/UserProfileSheet"

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate()

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && searchQuery.trim()) {
            navigate(`/doctors?search=${encodeURIComponent(searchQuery)}`)
            setIsMenuOpen(false)
        }
    }

    return (
        <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link to="/" className="flex items-center gap-2">
                    <HeartPulse className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold text-primary">Medezine</span>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                        Home
                    </Link>
                    <Link to="/doctors" className="text-sm font-medium hover:text-primary transition-colors">
                        Find Doctors
                    </Link>
                    <Link to="/symptoms" className="text-sm font-medium hover:text-primary transition-colors">
                        Symptom Analysis
                    </Link>
                    <Link to="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
                        Wait Times
                    </Link>
                    <Link to="/first-aid" className="text-sm font-medium hover:text-primary transition-colors">
                        First Aid
                    </Link>
                    <Link to="/medicines" className="text-sm font-medium hover:text-primary transition-colors">
                        Medicines
                    </Link>
                    <Link to="/report-analysis" className="text-sm font-medium hover:text-primary transition-colors">
                        Report Analysis
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <div className="relative w-64">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search doctors, clinics..."
                            className="pl-8"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleSearch}
                        />
                    </div>
                    <UserProfileSheet>
                        <Button variant="ghost" size="icon">
                            <User className="h-5 w-5" />
                        </Button>
                    </UserProfileSheet>
                    <Button asChild>
                        <Link to="/signup">SignUp</Link>
                    </Button>
                </div>

                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t p-4 space-y-4 bg-background">
                    <div className="space-y-2">
                        <Link
                            to="/"
                            className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/doctors"
                            className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Find Doctors
                        </Link>
                        <Link
                            to="/symptoms"
                            className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Symptom Analysis
                        </Link>
                        <Link
                            to="/dashboard"
                            className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Wait Times
                        </Link>
                        <Link
                            to="/first-aid"
                            className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            First Aid
                        </Link>
                        <Link
                            to="/medicines"
                            className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Medicines
                        </Link>
                        <Link
                            to="/report-analysis"
                            className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Report Analysis
                        </Link>
                    </div>
                    <div className="space-y-4 pt-4 border-t">
                        <Input placeholder="Search..." />
                        <Button className="w-full" asChild>
                            <Link to="/signup" onClick={() => setIsMenuOpen(false)}>SignUp</Link>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}
