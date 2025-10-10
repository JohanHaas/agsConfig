import app from "ags/gtk4/app"
import { Astal, Gdk } from "ags/gtk4"
import { execAsync } from "ags/process"
import { createPoll } from "ags/time"
import Gtk from "gi://Gtk?verision=4.0"
import GLib from "gi://GLib"

//import Workspaces from "./barModules/Workspaces.tsx"
//import Submenu from "./barModules/SubmenuWindow.tsx"
//import Battery from "./barModules/Battery.tsx"
import RightBox from "./barModules/RightBox.tsx"
import Mpris from "./barModules/Mpris.tsx"

export default function Bar({ gdkmonitor }: { gdkmonitor: Gdk.Monitor }) {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor

  const display = Gdk.Display.get_default()
  Gtk.Settings.get_default()!.gtk_icon_theme_name = "Fluent"
  const icontheme = Gtk.IconTheme.get_for_display(display)
  //print(icontheme.get_theme_name())

  const clock = createPoll("", 1000, () => {
    return GLib.DateTime.new_now_local().format("%H:%M %a, %d %b")
  })

  return (
    <window
      visible
      name="Bar"
      class="Bar"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={TOP | LEFT | RIGHT}
      application={app}
    >
      <centerbox>
        /* left box */
        <box $type="start">
          <Mpris />
        </box>
        /* center box */
        <box $type="center">
          <label class="Clock" label={clock} />
        </box>
        /* right box */
        <box $type="end">
          <RightBox />
        </box>
      </centerbox>
    </window>
  )
}
