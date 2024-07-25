import threading
import random
import time

vector_size = int(input('Informe o tamanho do vetor: '))
thread_size = int(input('Informe a quantidade de threads: '))

vector = [random.randint(1, 1000) for _ in range(vector_size)]

def sum_thread(start, end, thread_id, result):
    sum = 0
    for i in range(start, end):
        sum += vector[i]
    result[thread_id] = sum

results = [0] * thread_size # cada thread irá armazenar a sua soma parcial
threads = []

for i in range(thread_size):
    start = i * (vector_size // thread_size)
    end = (i + 1) * (vector_size // thread_size)

    if i == thread_size - 1:
        end = vector_size # quando o numero de threads nao é divisivel, ajusta o indice final
    thread = threading.Thread(target=sum_thread, args=(start, end, i, results))

    threads.append(thread)

print('\nIniciando as threads ')
start_time = time.time()

for t in threads:
    t.start()

for t in threads:
    t.join()

end_time = time.time()

execution_time_thread = end - start
total_thread_sum = sum(results)
print("\nTempo com threads: {:.6f} segundos".format(execution_time_thread))
print("Soma de cada thread: ", results)
print("Soma total (threads): ", total_thread_sum)

print("\nIniciando soma sequencial ")
start_time = time.time()
total_sequential_sum = sum(vector)
end_time = time.time()
execution_time_sequencial = end_time - start_time

print("\nTempo sequencial: {:.6f} segundos".format(execution_time_sequencial))
print("\nSoma total (sequencial): ", total_sequential_sum)