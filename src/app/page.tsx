import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>V&apos;imo</CardTitle>
        </CardHeader>
        <CardContent>
          <p>The V&apos;imo app is the best way to manage your inspections</p>
        </CardContent>
        <CardFooter>
          <Button>Get Started</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
