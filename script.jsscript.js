document.addEventListener('DOMContentLoaded', () => {
    const trail = document.querySelector('.mouse-trail');
    
    // ตั้งค่าเริ่มต้นของตำแหน่งแสงให้อยู่กลางจอ
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    // ตัวแปรสำหรับทำความสมูท (Lerp)
    let trailX = mouseX;
    let trailY = mouseY;

    // ดักจับเมื่อขยับเมาส์
    if (trail) {
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // ฟังก์ชันสร้างความนุ่มนวลให้แสงวิ่งตามเมาส์ ไม่แข็งกระด้าง
        function animateTrail() {
            // ค่อยๆ ขยับตำแหน่งปัจจุบันไปยังตำแหน่งเมาส์
            trailX += (mouseX - trailX) * 0.15;
            trailY += (mouseY - trailY) * 0.15;
            
            trail.style.transform = `translate(${trailX}px, ${trailY}px) translate(-50%, -50%)`;
            
            requestAnimationFrame(animateTrail);
        }
        
        animateTrail();
    }
});
