import { useSearchParams, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, ArrowLeft } from "lucide-react"
import { useState } from "react"
import doctorsData from "@/data/doctors.json"
import medicinesData from "@/data/medicines.json"
import { useCart } from "@/context/CartContext"

export default function Booking() {
    const [searchParams] = useSearchParams()
    const type = searchParams.get("type")
    const id = searchParams.get("id")
    const [isConfirmed, setIsConfirmed] = useState(false)
    const { cartItems, cartTotal, clearCart } = useCart()

    let item: any = null

    if (type === "doctor") {
        item = doctorsData.find(d => d.id === Number(id))
    } else if (type === "medicine") {
        item = medicinesData.find(m => m.id === Number(id))
    }

    // For cart, we don't need a single item, but we check if cart is empty
    if (type === "cart" && cartItems.length === 0 && !isConfirmed) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
                <Button asChild>
                    <Link to="/medicines">Browse Medicines</Link>
                </Button>
            </div>
        )
    }

    if (!item && type !== "cart") {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-2xl font-bold mb-4">Item not found</h1>
                <Button asChild>
                    <Link to="/">Go Home</Link>
                </Button>
            </div>
        )
    }

    const handleConfirm = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate API call
        setTimeout(() => {
            setIsConfirmed(true)
            if (type === "cart") {
                clearCart()
            }
        }, 1000)
    }

    if (isConfirmed) {
        return (
            <div className="container mx-auto px-4 py-12 max-w-md">
                <Card className="text-center border-green-200 bg-green-50">
                    <CardContent className="pt-6 space-y-4">
                        <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="h-8 w-8 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-green-800">
                            {type === "doctor" ? "Appointment Booked!" : "Order Placed!"}
                        </h2>
                        <p className="text-green-700">
                            {type === "doctor"
                                ? `Your appointment with ${item.name} has been confirmed.`
                                : type === "cart"
                                    ? "Your cart order has been placed successfully."
                                    : `Your order for ${item.name} has been placed successfully.`}
                        </p>
                        <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                            <Link to="/">Return Home</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-xl">
            <Button variant="ghost" asChild className="mb-6">
                <Link to={type === "doctor" ? "/doctors" : "/medicines"}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Link>
            </Button>

            <Card>
                <CardHeader>
                    <CardTitle>
                        {type === "doctor" ? "Book Appointment" : "Complete Purchase"}
                    </CardTitle>
                    <CardDescription>
                        {type === "doctor"
                            ? `Booking with ${item.name}`
                            : type === "cart"
                                ? `Checkout ${cartItems.length} items`
                                : `Buying ${item.name}`}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="mb-6 p-4 bg-slate-50 rounded-lg">
                        {type === "cart" ? (
                            <div className="space-y-2">
                                {cartItems.map(cartItem => (
                                    <div key={cartItem.id} className="flex justify-between text-sm">
                                        <span>{cartItem.name} x {cartItem.quantity}</span>
                                        <span className="font-medium">{cartItem.price}</span>
                                    </div>
                                ))}
                                <div className="border-t pt-2 mt-2 flex justify-between font-bold">
                                    <span>Total</span>
                                    <span>₹{cartTotal.toFixed(2)}</span>
                                </div>
                            </div>
                        ) : (
                            <div className="flex gap-4 items-center">
                                {item.image && (
                                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover" />
                                )}
                                <div>
                                    <h3 className="font-bold">{item.name}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {type === "doctor" ? (item as any).specialization : (item as any).category}
                                    </p>
                                    <p className="font-bold text-primary mt-1">
                                        {type === "doctor" ? (item as any).fee : (item as any).price}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    <form id="booking-form" onSubmit={handleConfirm} className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" required placeholder="John Doe" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" required placeholder="john@example.com" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" type="tel" required placeholder="+1 234 567 890" />
                        </div>
                        {type === "doctor" && (
                            <div className="grid gap-2">
                                <Label htmlFor="date">Preferred Date</Label>
                                <Input id="date" type="date" required />
                            </div>
                        )}
                    </form>
                </CardContent>
                <CardFooter>
                    <Button type="submit" form="booking-form" className="w-full">
                        {type === "doctor" ? "Confirm Booking" : "Place Order"}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
