export interface ITimes {
  setCurrentResolution: (val: string) => void
  setSelectedTime: (val: string) => void
  item: any
  selectedTime: string
  currentResolution: string
  resolution?: string
}
