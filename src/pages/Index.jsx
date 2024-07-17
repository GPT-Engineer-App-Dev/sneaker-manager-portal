import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash2 } from 'lucide-react';

const SneakerManagement = () => {
  const [sneakers, setSneakers] = useState([
    { id: 1, name: 'Air Jordan 1', brand: 'Nike', size: 10, price: 180 },
    { id: 2, name: 'Yeezy Boost 350', brand: 'Adidas', size: 9, price: 220 },
    { id: 3, name: 'Chuck Taylor All Star', brand: 'Converse', size: 8, price: 55 },
  ]);

  const [newSneaker, setNewSneaker] = useState({ name: '', brand: '', size: '', price: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSneaker({ ...newSneaker, [name]: value });
  };

  const handleAddSneaker = () => {
    if (newSneaker.name && newSneaker.brand && newSneaker.size && newSneaker.price) {
      setSneakers([...sneakers, { id: Date.now(), ...newSneaker }]);
      setNewSneaker({ name: '', brand: '', size: '', price: '' });
    }
  };

  const handleRemoveSneaker = (id) => {
    setSneakers(sneakers.filter(sneaker => sneaker.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Sneaker Management</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Add New Sneaker</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Sneaker Name"
              name="name"
              value={newSneaker.name}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Brand"
              name="brand"
              value={newSneaker.brand}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Size"
              name="size"
              type="number"
              value={newSneaker.size}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={newSneaker.price}
              onChange={handleInputChange}
            />
          </div>
          <Button className="mt-4" onClick={handleAddSneaker}>Add Sneaker</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sneaker Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sneakers.map((sneaker) => (
                <TableRow key={sneaker.id}>
                  <TableCell>{sneaker.name}</TableCell>
                  <TableCell>{sneaker.brand}</TableCell>
                  <TableCell>{sneaker.size}</TableCell>
                  <TableCell>${sneaker.price}</TableCell>
                  <TableCell>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleRemoveSneaker(sneaker.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default SneakerManagement;