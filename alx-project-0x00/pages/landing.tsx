import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extrabold">Landing Page</h1>
            <Card />

    <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
        <h1 className="text-2xl font-bold">Button Variants</h1>

        {/* Small Buttons */}
        <div className="flex gap-4 items-center">
            <Button title="Small - sm" styles="text-sm rounded-sm" />
            <Button title="Small - md" styles="text-sm rounded-md" />
            <Button title="Small - full" styles="text-sm rounded-full" />
        </div>

        {/* Medium Buttons */}
        <div className="flex gap-4 items-center">
            <Button title="Medium - sm" styles="text-base rounded-sm" />
            <Button title="Medium - md" styles="text-base rounded-md" />
            <Button title="Medium - full" styles="text-base rounded-full" />
        </div>

        {/* Large Buttons */}
        <div className="flex gap-4 items-center">
            <Button title="Large - sm" styles="text-lg rounded-sm" />
            <Button title="Large - md" styles="text-lg rounded-md" />
            <Button title="Large - full" styles="text-lg rounded-full" />
            <Button title="Large - lg" styles="text-lg rounded-lg" />
        </div>
    </main>
            </div>
    )
}
export default Landing;