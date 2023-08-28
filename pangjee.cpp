#include <iostream>
#include <vector>
#include <map>
#include <sstream>

using namespace std;


vector<int> findMode(const vector<int>& input) {
    map<int, int> frequency;

    for (int num : input) {
        frequency[num]++;
    }

    vector<int> modes;
    int maxFrequency = 0;

    for (const auto& pair : frequency) {
        if (pair.second > maxFrequency) {
            maxFrequency = pair.second;
        }
    }

    for (const auto& pair : frequency) {
        if (pair.second == maxFrequency and maxFrequency != 1) {
            modes.push_back(pair.first);
        }
    }

    return modes;
}

int main() {
    string inputLine;

    cout << "ใส่ชุดข้อมูล: ";
    getline(cin, inputLine);

    istringstream iss(inputLine);
    int num;

    vector<int> input;

    while (iss >> num) {
        input.push_back(num);
    }

    vector<int> modes = findMode(input);
    int count = 0;
        for (int num : input) {
        bool found = false;
        for (int element : modes) {
            if (element == num) {
                found = true;
                break;
            }
        }

        if (found) {
            count++;
        }
    }


    if (modes.size() > 0) { 
        cout << "มีตัวหมู่มากได้แก่ <";
        for (int i = 0; i < modes.size(); ++i) {
            cout << modes[i];
            if (i < modes.size() - 1) {
                cout << ", ";
            }
        }
        cout << "> เป็นจำนวน <" << count << "> ตัวจากข้อมูลทั้งหมด <" << input.size() << "> ตัว" << endl;
    } else {
        cout << "ชุดข้อมูลนี้ไม่มีตัวหมู่มาก" << endl;
    }

    return 0;
}
