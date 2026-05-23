"use client";
import { Button, Dropdown, Label } from "@heroui/react";

const CategoryDropDown = ({ category }) => {
  const categoryArray = Array.isArray(category) ? category : [category];

  return (
    <Dropdown>
      <Button variant="solid" color="primary" radius="full">
        Category
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          {categoryArray.map((cat, index) => (
            <Dropdown.Item key={index} id={cat} textValue={cat}>
              <Label>{cat}</Label>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default CategoryDropDown;




// <DropdownMenu aria-label="Category List">
//         {categories && categories.map((cat, i) => (
//           <DropdownItem key={i}>
//             {cat}
//           </DropdownItem>
//         ))}
//       </DropdownMenu>