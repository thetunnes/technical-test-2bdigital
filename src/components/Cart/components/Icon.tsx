import { SVGProps } from 'react'

export function CartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={19.2}
      height={24}
      viewBox="0 0 19.2 24"
      {...props}
    >
      <path
        d="M8.8 18.8h9.6a1.2 1.2 0 110 2.4H7.6A1.2 1.2 0 016.4 20V4.4H5.2a1.2 1.2 0 110-2.4h2.4a1.2 1.2 0 011.2 1.2v2.4h11.912A2.445 2.445 0 0123.2 8a2.312 2.312 0 01-.06.521l-1.381 6A2.469 2.469 0 0119.33 16.4H8.8zM8.2 26a1.8 1.8 0 111.8-1.8A1.8 1.8 0 018.2 26zM19 26a1.8 1.8 0 111.8-1.8A1.8 1.8 0 0119 26zM8.8 8v6h10.6l1.4-6z"
        transform="translate(-4 -2)"
        fill="#ffccd8"
        fillRule="evenodd"
      />
    </svg>
  )
}
