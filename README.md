DỰ ÁN BẢO MẬT - MINI PROJECT.
Họ và tên: Nguyễn Tấn Thiên
MSSV: 21119761
Khái niệm và các thuật toán sử dụng
•	Hàm Băm (Hash Function):
o	Khái niệm: 
-	Hàm băm là các thuật toán không sử dụng khóa để mã hóa, nó có nhiệm vụ băm thông điệp được đưa vào theo một thuật toán một chiều nào đó, rồi đưa ra một bản băm – văn bản đại diện – có kích thước cố định. Do đó người nhận không biết được nội dung hay độ dài ban đầu của thông điệp đã được băm bằng hàm băm.
-	Giá trị của hàm băm là duy nhất, và không thể suy ngược lại được nội dung thông điệp từ giá trị băm này.
o	Thuật toán/ giao thức liên quan:
-	Trong đoạn mã, sử dụng thư viện js-sha256 để tính toán giá trị băm của một đoạn văn bản bằng thuật toán SHA-256.
-	SHA-256 là viết tắt của Secure Hash Algorithm 256-bit (Thuật toán băm bảo mật 256 bit) và được sử dụng để bảo mật bằng mật mã. Thuật toán băm mật mã tạo ra các hàm băm không thể đảo ngược và duy nhất. Số lượng hàm băm có thể có càng lớn, thì xác suất để hai giá trị sẽ tạo ra cùng một giá trị băm càng nhỏ.

•	Mật Mã Bất Đối Xứng (RSA):
o	Khái niệm:
-	Mật mã bất đối xứng là một phương pháp mã hóa thông tin được sử dụng để giữ cho thông tin được truyền đi một cách an toàn qua các mạng công cộng. Mật mã bất đối xứng sử dụng hai khóa khác nhau để mã hóa và giải mã thông tin. Khóa công khai được sử dụng để mã hóa thông tin và được công khai, trong khi khóa bí mật được sử dụng để giải mã thông tin và được giữ bí mật. 
-	Mật mã bất đối xứng được cho là an toàn hơn mật mã đối xứng vì nó sử dụng hai khóa khác nhau để mã hóa và giải mã thông tin.
o	Thuật toán/ giao thức liên quan:
-	Trong đoạn mã, sử dụng thư viện jsencrypt để thực hiện việc tạo cặp khóa, mã hóa và giải mã RSA.
-	RSA (Rivest–Shamir–Adleman) là một phương pháp mã hóa thông tin công khai được sử dụng rộng rãi để truyền tải thông tin một cách an toàn. RSA sử dụng hai khóa khác nhau để mã hóa và giải mã thông tin. Khóa công khai được sử dụng để mã hóa thông tin và được công khai, trong khi khóa bí mật được sử dụng để giải mã thông tin và được giữ bí mật


