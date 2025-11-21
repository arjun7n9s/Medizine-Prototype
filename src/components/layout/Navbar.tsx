import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X, ShoppingCart, User, Languages } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { CartSheet } from "@/components/CartSheet"
import { UserProfileSheet } from "@/components/UserProfileSheet"
import { useLanguage } from "@/context/LanguageContext"

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate()
    const { cartCount } = useCart()
    const { language, setLanguage, t } = useLanguage()

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && searchQuery.trim()) {
            navigate(`/doctors?search=${encodeURIComponent(searchQuery)}`)
            setIsMenuOpen(false)
        }
    }

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'hi' : 'en')
    }

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary shrink-0">
                    <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-white">
                        M
                    </div>
                    <span className="hidden sm:inline">Medezine</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    <Link to="/" className="hover:text-primary transition-colors">{t('nav.home')}</Link>
                    <Link to="/doctors" className="hover:text-primary transition-colors">{t('nav.findDoctors')}</Link>
                    <Link to="/symptoms" className="hover:text-primary transition-colors">{t('nav.symptomAnalysis')}</Link>
                    <Link to="/medicines" className="hover:text-primary transition-colors">{t('nav.medicines')}</Link>
                    <Link to="/report-analysis" className="hover:text-primary transition-colors">{t('nav.reportAnalysis')}</Link>
                </div>

                {/* Search Bar */}
                <div className="hidden md:flex items-center flex-1 max-w-sm relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder={t('nav.searchPlaceholder')}
                        className="pl-9 bg-muted/50 border-none focus-visible:ring-1"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleSearch}
                    />
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                    <Button variant="ghost" size="icon" onClick={toggleLanguage} className="hidden sm:flex">
                        <Languages className="h-5 w-5" />
                        <span className="sr-only">Toggle Language</span>
                        <span className="ml-2 text-xs font-bold">{language.toUpperCase()}</span>
                    </Button>

                    <CartSheet>
                        <Button variant="ghost" size="icon" className="relative">
                            <ShoppingCart className="h-5 w-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Button>
                    </CartSheet>

                    <UserProfileSheet>
                        <Button variant="ghost" size="icon">
                            <User className="h-5 w-5" />
                        </Button>
                    </UserProfileSheet>

                    <Button asChild className="hidden sm:flex">
                        <Link to="/signup">{t('nav.signUp')}</Link>
                    </Button>

                    {/* Mobile Menu Button */}
                    <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t p-4 space-y-4 bg-white absolute w-full shadow-lg">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder={t('nav.searchPlaceholder')}
                            className="pl-9"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleSearch}
                        />
                    </div>
                    <div className="flex flex-col gap-4 font-medium">
                        <Link to="/" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</Link>
                        <Link to="/doctors" onClick={() => setIsMenuOpen(false)}>{t('nav.findDoctors')}</Link>
                        <Link to="/symptoms" onClick={() => setIsMenuOpen(false)}>{t('nav.symptomAnalysis')}</Link>
                        <Link to="/medicines" onClick={() => setIsMenuOpen(false)}>{t('nav.medicines')}</Link>
                        <Link to="/report-analysis" onClick={() => setIsMenuOpen(false)}>{t('nav.reportAnalysis')}</Link>
                        <div className="flex items-center justify-between py-2 border-t border-b">
                            <span>Language</span>
                            <Button variant="ghost" size="sm" onClick={toggleLanguage}>
                                <Languages className="h-4 w-4 mr-2" />
                                {language === 'en' ? 'English' : 'हिंदी'}
                            </Button>
                        </div>
                        <Button asChild className="w-full" onClick={() => setIsMenuOpen(false)}>
                            <Link to="/signup">{t('nav.signUp')}</Link>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}
