import Battery from "./Battery.tsx"

export default function RightBox() {
  return (
    <button class="RightBox" onClicked={(self) => {}}>
      <box>
        <Battery />
        <label class="Options" label="☰" />
      </box>
    </button>
  )
}
