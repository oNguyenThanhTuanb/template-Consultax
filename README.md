# Template consultax
# yarn
# yarn start

# Noted
- no dung bootstrap 3x
- khong duoc reset ul ol li

# Source
- thêm css và js ở dạng unmin vào trong folder extention của folder sass & js (nhớ đổi tên .css -> .scss)
  - gulp sẽ build ra folder css, js với name là xx.min.js hoặc xx.min.css
- add css vào module layout.pug với tên là xx.min.css -> page nào cũng có đủ hết các loại css, kể cả thừa cũng được, tính sau.
- production có config riêng để lấy ra các file unmin tương ứng.
- todo: 
  - MUST optimize all images when production mode

# Code
- Nhớ append title của từng page (title === file name === file name design)
- js thì tạm thời sẽ làm từng file riêng theo từng page, ví dụ index.js cho page index, tuy nhiên, nếu chắc chắn cái j global thì có thể sửa trong layout.pug ở phần block script, các thư viện liên quan đến page đó thì append vào phần block script của từng page, nhớ thêm .min 

## abstract, global thì ko có vd gì.
  - todo: cần 1 thằng config lúc đầu, biến, font, màu các kiểu vì component nào cũng sẽ dựa vào cái base này.
## components
  - components sẽ chỉ style component thôi, ví dụ bài viết blog, có 3,4 dạng hiển thị, thì style cho từng loai, việc component blog đó dài rộng bao nhiêu là do div cha quản lý, tức là phần đó sẽ được style trong layout folder với file scss là blog.scss, có thể là dạng list, dạng grid, mansory v.vv... 
  đảm bảo làm sao để nhấc đi đâu cũng có đủ style của component đó, to nhỏ mặc kệ.
  chú ý làm xong components nào đó update nó vào trong elements.pug theo mẫu.
## layout
  - layout thì như trên đã nói, nếu ông nào làm về phần testimonials thì style component đó, đầy đủ các thể loại, xong tự xem design xem nó có mấy kiểu layout thì làm nốt. ví dụ index có 1 layout, home2, home 3 cũng có layout testimonial kiểu khác, thì cứ làm xong rồi vứt bừa vào đấy, chạy được là đươc. chưa cần quan tâm section chứa layout đó có title hay cái j khác ngoài component đó, cứ vứt vào đó rồi duyệt từng page sau khi đã xong hết các loại components.
## pages
  - page, trong trường hợp index dùng layout testimonial kiểu 1, home 2 cũng kiểu 1, nhưng khác margin padding 1 tí, thì style trong này, đặt tên file là home-2.scss thôi, thêm 1 class vào cái div khác đó kiểu như testimonial-home-2....

# Naming
- images -> page_section_xx.xx
