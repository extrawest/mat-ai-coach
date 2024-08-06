import Navbar from "@/components/Navbar"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<div className="flex flex-col w-full h-full">
			{/* TODDO: NAVBAR */}
			<Navbar />
			{children}
		</div>
  )
}