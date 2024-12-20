// Assignment NO. 15
// Write a program to implement exception handling with catch blocks

// Program

#include <iostream>
#include <stdexcept>E

double divide(double numerator, double denominator) {
    if (denominator == 0) {
        throw std::runtime_error("Error: Division by zero is not allowed.");
    }
    return numerator / denominator;
}

int main() {
    double num, denom, result;

    try {
        std::cout << "Enter the numerator: ";
        std::cin >> num;

        if (std::cin.fail()) {
            throw std::invalid_argument("Invalid input: Please enter a numeric value for the numerator.");
        }

        std::cout << "Enter the denominator: ";
        std::cin >> denom;

        if (std::cin.fail()) {
            throw std::invalid_argument("Invalid input: Please enter a numeric value for the denominator.");
        }

        result = divide(num, denom);
        std::cout << "Result: " << result << std::endl;

    } catch (const std::runtime_error& e) {  // Catch division by zero errors
        std::cerr << e.what() << std::endl;

    } catch (const std::invalid_argument& e) {  // Catch invalid input errors
        std::cerr << e.what() << std::endl;

    } catch (...) {  // Catch any other exceptions
        std::cerr << "An unexpected error occurred." << std::endl;
    }

    return 0;
}

