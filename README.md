# Hormesis Keyboard

A custom low-profile wireless split mechanical keyboard, inspired by the Corne v3.

---

## Overview

| Spec | Detail |
|------|--------|
| Keys | 50 (split 25/25) |
| Layout | 5×6 column stagger per half + 3-key thumb cluster |
| Profile | Low-profile |
| Wireless | Bluetooth 5.0, up to 5 device profiles |
| Controller | nice!nano v2 (nRF52840) |
| RGB | WS2812 underglow, 25 LEDs per half |

---

## Repository Structure

```
hardware/
├── kicad/          KiCAD PCB schematic and layout
├── footprints/     Ergogen custom footprints
├── output/         Generated outputs (gerbers, outlines, cases)
├── top_plate/      Top plate Ergogen design
├── firmware/       Pre-built .uf2 files ready to flash
└── config.yaml     Ergogen PCB config

boards/             ZMK shield definition (hormesis_left / hormesis_right)
config/             ZMK keymap and firmware config
zephyr/             ZMK module config
build.yaml          ZMK GitHub Actions build targets
.github/workflows/  Auto-build firmware on push
```

---

## Layout

```
  1   2   3   4   5                   6   7   8   9   0
TAB   Q   W   E   R   T       Y   U   I   O   P  ESC
CAP   A   S   D   F   G       H   J   K   L   ;  SFT
  Z   X   C   V   B                   N   M   ,   .   /
                CTL ALT GUI     SPC  FN BSP
```

### Fn Layer (hold FN)

```
 F1  F2  F3  F4  F5                  F6  F7  F8  F9 F10
  `   !   @   #   $   %       ^   &   *   (   )  DEL
  _   _   -   =   [   ]      LFT DWN  UP RGT   '  ENT
BTC BT0 BT1 BT2 BT3             BT4 RGB  H+  S+   \
            USB BLE TOG     BRI EFF BOT
```

`BTC` = clear BT, `BT0–4` = select profile, `RGB` = toggle underglow, `H+/S+` = hue/saturation, `BRI` = brightness, `EFF` = next effect, `BOT` = bootloader, `USB/BLE/TOG` = output source.

---

## Flashing Firmware

Pre-built `.uf2` files are in `hardware/firmware/`:

```
hardware/firmware/hormesis_left-nice_nano_v2.uf2
hardware/firmware/hormesis_right-nice_nano_v2.uf2
```

1. Double-tap the reset button on the nice!nano — it mounts as a USB drive (`NICENANO`).
2. Drag the matching `.uf2` file onto the drive.
3. Flash left first, then right.

---

## Customizing Keymaps

**Edit the keymap** in `config/hormesis.keymap`, push to GitHub, and the Actions workflow auto-builds new firmware. Download from the Actions tab.

**ZMK Studio (GUI, no recompile):** Add `CONFIG_ZMK_STUDIO=y` to `config/hormesis.conf`, rebuild, flash, then use [zmk.studio](https://zmk.studio) to remap keys live over USB or BLE.

---

## Bill of Materials

| Part | Qty |
|------|-----|
| nice!nano v2 | 2 |
| Low-profile MX switches | 50 |
| Low-profile keycaps | 50 |
| WS2812B LEDs | 50 (25 per half) |
| SOD-123 diodes | 50 |
| JST PH 2.0 battery connector | 2 |
| LiPo battery (301230 or similar) | 2 |
| Reset switch (3×6mm SPST) | 2 |

---

## PCB Fabrication

Gerbers are in `hardware/kicad/gerber/`. Recommended fab settings:

- Layers: 2
- Thickness: 1.6 mm
- Surface finish: HASL or ENIG
- Quantity: 5 (gives 2 full keyboards + spares)

---

## License

MIT
