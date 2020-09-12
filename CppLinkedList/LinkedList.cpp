#include <iostream>

using namespace std;

struct list
{
    int info;
    list *next;
};

class linkedList
{
    private:
        list *start,*last;
    public:
        linkedList()
        {
            start = NULL;
            last = NULL;
        }
    void addToList(int n)
    {
        list *tmp = new list;  
        tmp -> info = n;
        tmp-> next = NULL;
        
        if(start == NULL)
        {
            start = tmp;
            last = tmp;
        }
        else
        {
            last -> next = tmp;
            last = last -> next;
        }
    }
};

int main()
{
    linkedList a;
    a.addToList(0);
    a.addToList(1);
    a.addToList(2);
    return 0;
}
