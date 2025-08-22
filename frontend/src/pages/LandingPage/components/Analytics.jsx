import { Briefcase, Target, TrendingUp, Users } from "lucide-react"


export default function Analytics() {
    const stats = [
        {
            icon: Users,
            title: 'Active Users',
            value: '2.4M+',
            growth: '+15%',
            color: 'blue'
        },
        {
            icon: Briefcase,
            title: 'Job Posted',
            value: '150K+',
            growth: '+22%',
            color: 'puple'
        },
        {
            icon: Target,
            title: 'Successful Hires',
            value: '89k+',
            growth: '+18%',
            color: 'green'
        },
        {
            icon: TrendingUp,
            title: 'Match Rate',
            value: '94%',
            growth: '+8%',
            color: 'orange'
        }
    ];
  return (
    <section>Analytics</section>
  )
}
