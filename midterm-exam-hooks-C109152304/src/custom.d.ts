declare module "*.svg" {
	import * as React from "react"

	export const ReactComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}


declare module '*.jpg' {
  const content: any
  export default content
}