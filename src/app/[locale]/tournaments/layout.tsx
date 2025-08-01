import Navbar from '@/components/ui/Navbar'

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
		</div>
	)
}
