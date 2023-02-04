export interface Route {
  name: string
  component: React.FC
  options: {
    tabBarIcon: ({ focused }: { focused: boolean }) => JSX.Element
  }
}
