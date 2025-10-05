import AstalMpris from "gi://AstalMpris?version=0.1"
import { createBinding, With } from "gnim"
import Pango from "gi://Pango?version=1.0"

export default function Mpris() {
  const spotify = AstalMpris.Player.new("spotify")

  const titleBinding = createBinding(spotify, "metadata").as(() =>
    getTitle(spotify),
  )

  return (
    <box visible={createBinding(spotify, "available")}>
      <button onClicked={() => spotify.previous()}>
        <image iconName="media-skip-backward-symbolic" />
      </button>
      <label label={titleBinding} />
    </box>
  )
}

function getTitle(player: AstalMpris.Player): string {
  return player.artist
    ? `${player.artist}: ${player.title}`
    : player.album
      ? `${player.album}: ${player.title}`
      : `${player.title}`
}
