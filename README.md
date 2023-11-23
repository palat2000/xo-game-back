# วิธีติดตั้งและรันโปรเจค

1. ติดตั้ง dependencies => npm install
2. ใช้ db เป็น mysql
3. สร้างไฟล์ .env
4. เขียนในไฟล์ .env โดยเปลี่ยนข้อมูลให้เป็นตาม server ของผู้ใช้

```env
DATABASE_URL=mysql://USER:PASSWORD@HOST:PORT/DATABASE
```

5. รันคำสั่งของ prisma => npx prisma db push
6. รัน script start => npm start
7. server run on localhost:8000
