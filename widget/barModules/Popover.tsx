import Gtk from "gi://Gtk?version=4.0"

export default function Popover() {
  return (
    <popover class="Submenu">
      <box orientation={Gtk.Orientation.VERTICAL}>
        <label label="Hallo" />
        <label label="Welt" />
      </box>
    </popover>
  )
}
