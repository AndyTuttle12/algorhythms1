with open('numbers.txt') as file:
	file_contents_as_list = file.readlines();
numbers = file_contents_as_list;
total_sum = 0;
for number in numbers:
	list_num = int(number);
	list = [int(digit) for digit in str(list_num)]
	num_sum = 0;
	for i in list:
		num_sum += i;
	# print num_sum;
	total_sum += num_sum;
print total_sum;