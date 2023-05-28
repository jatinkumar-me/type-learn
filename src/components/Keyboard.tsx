type PropTypes = {
  pressedKey: string,
  expectedKey: string
}
export default function({ pressedKey = "", expectedKey = "" }: PropTypes) {
  if (pressedKey === " ") pressedKey = "SPACE";
  if (expectedKey === " ") expectedKey = "SPACE";
  return (
    <div className="keyboard-base">
      {keys.map((key, i) =>
        <div
          key={i}
          className={
            `key ${key.className} ${pressedKey === key.value.toUpperCase() ?
              "pressed" :
              ""} ${expectedKey === key.value.toUpperCase() ?
                "expected" :
                ""}`
          }
        >
          {key.value}
        </div>)}
    </div>
  )
}
const keys = [
  { value: '~', className: 'tilde' },
  { value: '1', className: '' },
  { value: '2', className: '' },
  { value: '3', className: '' },
  { value: '4', className: '' },
  { value: '5', className: '' },
  { value: '6', className: '' },
  { value: '7', className: '' },
  { value: '8', className: '' },
  { value: '9', className: '' },
  { value: '0', className: '' },
  { value: '-', className: 'minus' },
  { value: '+', className: 'plus' },
  { value: 'Delete', className: 'delete' },
  { value: 'Tab', className: 'tab' },
  { value: 'Q', className: '' },
  { value: 'W', className: '' },
  { value: 'E', className: '' },
  { value: 'R', className: '' },
  { value: 'T', className: '' },
  { value: 'Y', className: '' },
  { value: 'U', className: '' },
  { value: 'I', className: '' },
  { value: 'O', className: '' },
  { value: 'P', className: '' },
  { value: '[', className: 'bracket' },
  { value: ']', className: 'bracket' },
  { value: '\\', className: 'backslash' },
  { value: 'CapsLock', className: 'capslock' },
  { value: 'A', className: '' },
  { value: 'S', className: '' },
  { value: 'D', className: '' },
  { value: 'F', className: '' },
  { value: 'G', className: '' },
  { value: 'H', className: '' },
  { value: 'J', className: '' },
  { value: 'K', className: '' },
  { value: 'L', className: '' },
  { value: ';', className: '' },
  { value: "'", className: '' },
  { value: 'Return', className: 'return' },
  { value: 'Shift', className: 'leftshift' },
  { value: 'Z', className: '' },
  { value: 'X', className: '' },
  { value: 'C', className: '' },
  { value: 'V', className: '' },
  { value: 'B', className: '' },
  { value: 'N', className: '' },
  { value: 'M', className: '' },
  { value: ',', className: 'comma' },
  { value: '.', className: 'period' },
  { value: '/', className: 'slash' },
  { value: 'Shift', className: 'rightshift' },
  { value: 'Ctrl', className: 'leftctrl' },
  { value: 'Alt', className: 'alt' },
  { value: 'Command', className: 'command' },
  { value: 'Space', className: 'space' },
  { value: 'Command', className: 'command' },
  { value: 'Alt', className: 'alt' },
  { value: 'Ctrl', className: 'rightctrl' },
  { value: 'Fn', className: 'fn' }
];
