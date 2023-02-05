export interface IBSegmentController {
  tabs: any
  onChange: (index: number) => void
  currentIndex?: number
  segmentedControlBackgroundColor?: string
  paddingVertical?: number
  activeSegmentBackgroundColor?: string
  textColor?: string
  activeTextColor?: string
}
