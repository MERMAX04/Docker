# ใช้ Node.js 22 บน Alpine Linux ซึ่งมีขนาด image เล็ก
FROM node:22-alpine

# กำหนดโฟลเดอร์ทำงานภายใน container
WORKDIR /app

# คัดลอกไฟล์รายการ dependencies เข้า image ก่อน
COPY package.json ./

# ติดตั้งเฉพาะ dependencies ที่จำเป็นสำหรับการใช้งานจริง
RUN npm install --omit=dev

# คัดลอก source code ของ Express API เข้า image
COPY server.js ./

# ประกาศ port ที่ API ใช้งานภายใน container
EXPOSE 3000

# สั่งเริ่ม API เมื่อ container ทำงาน
CMD ["npm", "start"]
