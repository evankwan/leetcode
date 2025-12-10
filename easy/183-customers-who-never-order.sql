SELECT
    C.name as "Customers"
FROM 
    Customers c
LEFT JOIN 
    Orders o ON o.customerId = c.id
WHERE o.id IS NULL