import threading
import random
import time

def calcule_partial_pi(number_of_points, thread_id, results):
        points_inside_of_circle = 0
        x, y = random.random(), random.random()
        for _ in range(number_of_points):
            distance_to_center = x**2 + y**2
            if distance_to_center <= 1:
                  points_inside_of_circle += 1	
        results[thread_id] = points_inside_of_circle

def calcule_pi(number_of_points, thread_size):
    threads = []
    results = [0] * thread_size
    points_per_thread = number_of_points // thread_size

    for i in range(thread_size):
        start = i * points_per_thread
        end = (i + 1) * points_per_thread

        if i == thread_size - 1:
            end = number_of_points

        thread = threading.Thread(target=calcule_partial_pi, args=(end - start, i, results))
        threads.append(thread)
        thread.start()

    for thread in threads:
        thread.join()

    total_points_inside_of_circle = sum(results)
    pi_estimated = 4 * total_points_inside_of_circle / number_of_points
    return pi_estimated

    
if __name__ == '__main__':
    number_of_points = int(input('Informe a quantidade de pontos: '))
    thread_size = int(input('Informe a quantidade de threads: '))

    start_time = time.time()
    pi_estimated = calcule_pi(number_of_points, thread_size)
    end_time = time.time()
    execution_time = end_time - start_time

    print(f'\nAproximação de π com {number_of_points} pontos: {pi_estimated}')
    print(f'\nTempo de execução: {execution_time} segundos')