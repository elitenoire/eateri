import { MenuSeparator } from 'reakit/Menu'

import Dropdown from './DropdownContext'
import DropdownButton from './DropdownButton'
import DropdownItem from './DropdownItem'
import DropdownList from './DropdownList'

Dropdown.Button = DropdownButton
Dropdown.Item = DropdownItem
Dropdown.List = DropdownList
Dropdown.Separator = MenuSeparator

export { Dropdown }
