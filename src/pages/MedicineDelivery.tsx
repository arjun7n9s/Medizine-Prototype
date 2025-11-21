import { useState } from "react"
import { Search, ShoppingCart } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Link } from "react-router-dom"
import medicinesData from "@/data/medicines.json"
import { useCart } from "@/context/CartContext"
import { CartSheet } from "@/components/CartSheet"

export default function MedicineDelivery() {
    const [searchTerm, setSearchTerm] = useState("")
    const [category, setCategory] = useState("all")
    const { addToCart, cartCount } = useCart()

    const categories = Array.from(new Set(medicinesData.map(m => m.category)))

    const filteredMedicines = medicinesData.filter(medicine => {
        const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            medicine.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = category === "all" || medicine.category === category
        return matchesSearch && matchesCategory
    })

    return (
        <div className="container mx-auto px-4 py-8 space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Medicine Delivery</h1>
                    <p className="text-muted-foreground">Order medicines and health products online</p>
                </div>
                <CartSheet>
                    <Button className="gap-2">
                        <ShoppingCart className="h-4 w-4" /> Cart ({cartCount})
                    </Button>
                </CartSheet>
            </div>

            {/* Filters */}
            <div className="bg-card p-4 rounded-lg border shadow-sm flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search medicines..."
                        className="pl-9"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="w-full md:w-48">
                    <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger>
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            {categories.map(cat => (
                                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredMedicines.map((medicine) => (
                    <Card key={medicine.id} className="overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
                        <div className="aspect-square relative bg-slate-100">
                            <img
                                src={medicine.image}
                                alt={medicine.name}
                                className="w-full h-full object-cover mix-blend-multiply"
                            />
                        </div>
                        <CardContent className="p-4 flex-1 space-y-2">
                            <div className="flex justify-between items-start gap-2">
                                <Badge variant="secondary" className="text-xs">
                                    {medicine.category}
                                </Badge>
                                <span className="font-bold text-primary">{medicine.price}</span>
                            </div>
                            <h3 className="font-bold line-clamp-2">{medicine.name}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                                {medicine.description}
                            </p>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 grid grid-cols-2 gap-2">
                            <Button variant="outline" onClick={() => addToCart(medicine)}>
                                Add to Cart
                            </Button>
                            <Button asChild>
                                <Link to={`/booking?type=medicine&id=${medicine.id}`}>
                                    Buy Now
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {filteredMedicines.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">No medicines found matching your criteria.</p>
                    <Button variant="link" onClick={() => { setSearchTerm(""); setCategory("all") }}>
                        Clear Filters
                    </Button>
                </div>
            )}
        </div>
    )
}
